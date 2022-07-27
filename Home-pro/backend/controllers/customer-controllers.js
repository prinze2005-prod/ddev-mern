const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Customer = require('../models/customer');

const getCustomers = async (req, res, next) => {
  const customers = await Customer.find().exec();
  res.json(customers);
}


//unused
const updateProfile = async (req,res,next) => {
  let existingCustomer;
  try{
    //change to read from token
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
    let error = existingCustomer.validateSync();
    if(error !== undefined){
      console.log(error);
      throw 'failed validation';
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

exports.updateProfile = updateProfile;
exports.getCustomers = getCustomers;
