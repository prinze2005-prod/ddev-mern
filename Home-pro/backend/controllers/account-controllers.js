const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Account = require('../models/account');

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
    //existingUser = await Account.findById(email);
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',500);
    return next(error);
  }
  //testing purposes
  console.log(existingUser);
  console.log(!existingUser);
  
  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError('Invalid credentials, could not log you in.',401);
    return next(error);
  }

  res.json({message: 'Logged in!'});
};
//to do
/*
const signUp = async (req,res,next) => {
  const newAccount = new Account({
    email: req.body.email,
    password: req.body.password 
  })
  const newCustomer = ({
    email: req.body.email
    fName: req.body.fName
    lName: req.body.lName
  })
}
*/
exports.login = login;
exports.getAccounts = getAccounts;
