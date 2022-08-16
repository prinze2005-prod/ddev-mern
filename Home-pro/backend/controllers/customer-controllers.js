/**
 * @author Scott Normore
 * @description A controller for customer. Handles most database interactions
 * that are interacting with the customer object in our database
*/

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Customer = require('../models/customer');
/*
* Fetches all customers from database
*/
const getCustomers = async (req, res, next) => {
  const customers = await Customer.find().exec();
  res.json(customers);
}
/*
* Fetches more sensitive information from a logged in customer. Gets customer using middlware from customer route.
*/
const getLoggedInInfo = async (req, res, next) => {
  const customer = await Customer.findOne({cust_email: res.locals.email});
  res.json(customer);
}

/*
* function that can be used by an admin to update a customer profile.
*/
const adminUpdateProfile = async (req,res,next) => {
  let existingCustomer;
  try{
    existingCustomer = await Customer.findOne({cust_email: req.body.email});
  }catch(err){
    res.json({message: err});
    return
  }

  if(existingCustomer == null){
    res.json({message: "Account does not exist"});
    return
  }
  try{
    existingCustomer.fName = req.body.fName;
    existingCustomer.lName = req.body.lName;
    existingCustomer.street = req.body.street;
    existingCustomer.postalCode = req.body.postalCode;
    existingCustomer.phoneNumber = req.body.pnumber;
    let error = existingCustomer.validateSync();
    if(error !== undefined){
      console.log(error);
      res.json({message: "Error has occured"});
    }
    console.log("I was ran!");
    await existingCustomer.save();
    console.log("I was ran too");
    res.json({message: "Success!"});
  }catch(err){
    res.json({message: "Error has occured"});
  }

  return;
};
/*
* Code used by an admin to update a customer profile.
*/
const updateProfile = async (req,res,next) => {
  let existingCustomer;
  try{
    existingCustomer = await Customer.findOne({cust_email: req.body.email});
  }catch(err){
    res.json({message: err});
    return
  }

  if(existingCustomer == null){
    res.json({message: "Account does not exist"});
    return
  }
  try{
    existingCustomer.fName = req.body.fName;
    existingCustomer.lName = req.body.lName;
    existingCustomer.street = req.body.street;
    existingCustomer.postalCode = req.body.postalCode;
    existingCustomer.phoneNumber = req.body.pnumber;
    let error = existingCustomer.validateSync();
    if(error !== undefined){
      console.log(error);
      res.json({message:"Error has occured"});
    }
    await existingCustomer.save();
    res.json({message: "Success!"});
  }catch(err){
    res.json({message: "Error has occured"});
  }

  return;
};

exports.updateProfile = updateProfile;
exports.getCustomers = getCustomers;
exports.adminUpdateProfile = adminUpdateProfile;
exports.getLoggedInInfo = getLoggedInInfo;