const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const HttpError = require('../models/http-error');
const Account = require('../models/account');
const Customer = require('../models/customer');
const Token = require('../models/refreshToken');

const getAccounts = async (req, res, next) => {
  const accounts = await Account.find().exec();
  res.json(accounts);
}

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email + " " + password);
  let existingUser;

  try {
    existingUser = await Account.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',500);
    return next(error);
  }
  //testing purposes
  //console.log(existingUser);
  //console.log(!existingUser);
  
  // implement bcrypt compare here
  //
  //
  //
  let result;
  try{
    if(!(!existingUser)){
      result = await bcrypt.compare(password,existingUser.password);
    }
  }catch{
    res.json({message: 'Invalid Credentials'});
    return;
  }
  
  //console.log(result);
  if (!existingUser || !result) {
    res.json({message: 'Invalid Credentials'});
    return;
  }

  //create session token and refresh token here
  //
  //
  //

  //Access Token
  //
  //
  //
  //
  //
  const UserData = {
    "email" : existingUser.email,
    "auid" : existingUser.authorization
  }
  const encryptedAccessToken = jwt.sign(UserData, process.env.ACCESS_TOKEN_SECRET)

  //Refresh Token
  //
  //
  //
  //
  //
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
  

/*
  const refreshToken = await new Token({
    userId: existingUser._id,
    token: crypto.randomBytes(32).toString("hex"),
  }).save();
*/



  const encryptedRefreshToken = jwt.sign(refreshToken.toObject(), process.env.REFRESH_TOKEN_SECRET)


  const unencryptedRefreshToken = jwt.verify(encryptedRefreshToken, process.env.REFRESH_TOKEN_SECRET);
  const unencryptedAccessToken = jwt.verify(encryptedAccessToken, process.env.ACCESS_TOKEN_SECRET);
  console.log(unencryptedRefreshToken);
  console.log(encryptedRefreshToken);
  console.log(unencryptedAccessToken);
  console.log(encryptedAccessToken);

  //response
  res.cookie("HP_refreshToken", encryptedRefreshToken);
  res.cookie("HP_accessToken", encryptedAccessToken);

  if(existingUser.authorization == "Customer"){
    const existingCustomer = await Customer.findOne({cust_email: existingUser.email})
    res.cookie("HP_userEmail", existingCustomer.cust_email)
    res.cookie("HP_userFName", existingCustomer.fName)
    res.cookie("HP_userLName", existingCustomer.lName)
  }
  // more else if for other account types
  res.json({message: 'success'});

};

const signUp = async (req,res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.json("Invalid Validation");
    return;
  }
  let existingUser;
  try{
    existingUser = await Account.findOne({email: req.body.email})
  }catch(err){
    res.json({message: err});
    return;
  }
  if (!(!existingUser)){
    res.json({message: "User already exists"});
    return;
  }
  try{
    //implement bcrypt hashed passowrd here
    //
    //
    //
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newAccount= new Account({
      email: req.body.email,
      password: hashedPassword,
      authorization: "Customer"
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
    console.log("I was ran!");
    await newAccount.save();
    console.log("I was ran too!");
    await newCustomer.save();
    console.log("I was ran three");
    res.json({message: 'success'});
  }catch(err){
    res.json({message: err});
    return;
  }
  return;
};

const updateCustomerAccount = async (req,res,next) => {
  let existingAccount;
  let existingCustomer;
  try{
    existingAccount = await Account.findOne({email: res.locals.email});
  }catch(err){
    res.json({message: err});
    return;
  }
  try{
    existingCustomer = await Customer.findOne({cust_email: res.locals.email});
  }catch(err){
    res.json({message: err});
    return
  }

  if(existingAccount == null || existingCustomer == null){
    res.json({message: "Error in request, please re-login"});
    return
  }
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    existingAccount.password=hashedPassword;
    let error1 = existingAccount.validateSync();
    if(error1 !== undefined){
      console.log(error1);
      throw 'failed validation';
    }
    existingCustomer.fName = req.body.fname;
    existingCustomer.lName = req.body.lname;
    existingCustomer.street = req.body.street;
    existingCustomer.postalCode = req.body.postalCode;
    existingCustomer.phoneNumber = req.body.pnumber;
    let error2 = existingCustomer.validateSync();
    if(error2 !== undefined){
      console.log(error2);
      throw 'failed validation';
    }
    console.log("I run!");
    await existingCustomer.save();
    console.log("I was ran!");
    await existingAccount.save();
    console.log("I was ran too");
    res.json({message: "Success!"});
  }catch(err){
    res.json({message: "Error has occured"});
  }
};


exports.updateCustomerAccount = updateCustomerAccount;
exports.login = login;
exports.signUp = signUp;
exports.getAccounts = getAccounts;
