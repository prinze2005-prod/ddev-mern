const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const HttpError = require('../models/http-error');
const Account = require('../models/account');
const Customer = require('../models/customer');
const Token = require('../models/refreshToken');
const Technician = require('../models/technician');

/*
* Used to retreive all account objects from database 
*/
const getAccounts = async (req, res, next) => {
  const accounts = await Account.find().exec();
  res.json(accounts);
}

/*
* The login Functionality
* Takes in credentials. Using the email, finds relevant data on database.
* If found, uses bcrypt's compare to check passwords.
* If sucessfull, creates appropiate cookies and sends them to user
* Else, returns an error message
*/
const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email + " " + password);
  let existingUser;

  try {
    existingUser = await Account.findOne({email: { $regex : new RegExp(req.body.email,"i") } })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',500);
    return next(error);
  }
  let result;
  try{
    if(!(!existingUser)){
      result = await bcrypt.compare(password,existingUser.password);
    }
  }catch{
    res.json({message: 'Invalid Credentials'});
    return;
  }
  
  if (!existingUser || !result) {
    res.json({message: 'Invalid Credentials'});
    return;
  }

  //creates access token using email and authorization
  const UserData = {
    "email" : existingUser.email,
    "auid" : existingUser.authorization
  }
  const encryptedAccessToken = jwt.sign(UserData, process.env.ACCESS_TOKEN_SECRET)

  //Creates Refresh Token using user's mongodb id and a randomly generated uuid
  //if unable to generate token, returns errot
  //in addition, will replace any exisisting refresh token on the database
  let existingToken;
  try {
    existingToken = await Token.findOne({ userId: existingUser._id })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',500);
    return next(error);
  }
  console.log(existingToken)
  let refreshToken;

  if(!existingToken){
    refreshToken = await new Token({
      userId: existingUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
  }
  else{
    existingToken.remove();
    refreshToken = await new Token({
      userId: existingUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
  }
  
  const encryptedRefreshToken = jwt.sign(refreshToken.toObject(), process.env.REFRESH_TOKEN_SECRET)

  //stores tokens in cookies. Modify cookies to meet deployment needs
  res.cookie("HP_refreshToken", encryptedRefreshToken);
  res.cookie("HP_accessToken", encryptedAccessToken);
  let role;
  //stores less sensitive information in unencrypted cookies to be used by client side code. Modify cookies to meet deployment needs
  if(existingUser.authorization === "Customer"){
    const existingCustomer = await Customer.findOne({cust_email: existingUser.email})
    res.cookie("HP_userEmail", existingCustomer.cust_email)
    res.cookie("HP_userFName", existingCustomer.fName)
    res.cookie("HP_userLName", existingCustomer.lName)
    res.cookie("HP_type","Customer")
    role="Customer";
  }
  if(existingUser.authorization === "Technician"){
    const existingTechnician = await Technician.findOne({tech_email: existingUser.email})
    res.cookie("HP_userEmail", existingTechnician.cust_email)
    res.cookie("HP_userName", existingTechnician.fName)
    res.cookie("HP_type","Technician")
    role="Technician";
  }
  if(existingUser.authorization === "Admin"){
    res.cookie("HP_userEmail", existingUser.email)
    res.cookie("HP_type","Admin")
    role="Admin";
  }

  //respond with sucess message
  res.json({message : role});

};

/*
* Code executed when signing up
*/
const signUp = async (req,res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.json("Invalid Validation");
    return;
  }
  let existingUser;
  try{
    existingUser = await Account.findOne({email: { $regex : new RegExp(req.body.email,"i") } })
  }catch(err){
    res.json({message: err});
    return;
  }
  if (!(!existingUser)){
    res.json({message: "User already exists"});
    return;
  }
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newAccount= new Account({
      email: req.body.email,
      password: hashedPassword,
      authorization: "Customer"
      //,active: false
    })
    const newCustomer= new Customer({
      cust_email: req.body.email,
      fName: req.body.fName,
      lName: req.body.lName,
      address: {
          street: req.body.street,
          city: "Calgary",
          province: "Alberta",
          postalCode: req.body.postalCode
      },
      phoneNumber: req.body.number
    })
    console.log("foo")
    let errorA = newAccount.validateSync();
    let errorC = newCustomer.validateSync();
    console.log("foo2");
    if(errorA !== undefined || errorC !== undefined){
      console.log(errorA);
      console.log(errorC);
      throw 'failed validation';
    }
    //code to send email to activate here
    await newAccount.save();
    await newCustomer.save();
    res.json({"message": 'success'});
  }catch(err){
    res.json({"message": err});
    return;
  }
  return;
};


/*
* Function used by customers to modify their own account
* Uses email retreived by middleware in the customer routes
*/
const updateCustomerAccount = async (req,res,next) => {
  let existingAccount;
  let existingCustomer;
  try{
    existingAccount = await Account.findOne({email: { $regex : new RegExp(res.locals.email,"i") } });
  }catch(err){
    res.json({message: err});
    return;
  }
  try{
    existingCustomer = await Customer.findOne({cust_email: { $regex : new RegExp(res.locals.email,"i") } });
  }catch(err){
    res.json({message: err});
    return
  }

  if(existingAccount == null || existingCustomer == null){
    res.json({message: "Error in request, please re-login"});
    return
  }
  try{
    if(req.body.password == null){
      existingCustomer.fName = req.body.fname;
      existingCustomer.lName = req.body.lname;
      existingCustomer.street = req.body.street;
      existingCustomer.postalCode = req.body.postalCode;
      existingCustomer.phoneNumber = req.body.pnumber;
      let error2 = existingCustomer.validateSync();
      if(error2 !== undefined){
        console.log(error2);
        res.json({message: "Error in validation"});
      }
      console.log("I run!");
      await existingCustomer.save();
      console.log("I was ran!");
      res.json({message: "Success!"});
    }else{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      existingAccount.password=hashedPassword;
      let error1 = existingAccount.validateSync();
      if(error1 !== undefined){
        console.log(error1);
        res.json({message: "Error in validation"});
      }
      existingCustomer.fName = req.body.fname;
      existingCustomer.lName = req.body.lname;
      existingCustomer.street = req.body.street;
      existingCustomer.postalCode = req.body.postalCode;
      existingCustomer.phoneNumber = req.body.pnumber;
      let error2 = existingCustomer.validateSync();
      if(error2 !== undefined){
        console.log(error2);
        res.json({message: "Error in validation"});
      }
      await existingCustomer.save();
      await existingAccount.save();
      res.json({message: "Success!"});
    }
  }catch(err){
    res.json({message: "Error has occured"});
  }
};


exports.updateCustomerAccount = updateCustomerAccount;
exports.login = login;
exports.signUp = signUp;
exports.getAccounts = getAccounts;
