const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Job = require('../models/job');
const Receipt = require('../models/receipt');

const getJobs = async (req, res, next) => {
  const jobs = await Job.find().exec();
  res.json(jobs);
}



//TODO, add error handling

const createJob = async (req,res,next) => {
  console.log(req.body);
  console.log(req.body.email);
  try{
  const newJob = new Job({
    first_name: req.body.fname,
    last_name: req.body.lname,
    tech_email: "unassigned",
    cust_email: req.body.email,
    status: "unassigned",
    description: req.body.description,
    service_id: 2,
    address:{
      street: req.body.street,
      city: "Calgary",
      province: "Alberta",
      postalCode: req.body.postalCode
    },
    phoneNumber: req.body.pnumber
  })
  let error =  newJob.validateSync();
  console.log(error);
  if(error !== undefined){
    throw 'failed validation';
  }
  console.log("I was ran!");
  const result = await newJob.save();
  console.log("I was ran too!");
  res.json({message: 'success'});
  }catch(err){
    res.json({message: 'Unable to save to database'});
  }
};

const getReceipts = async (req, res, next) => {
  const receipts = await Receipt.find().exec();
  res.json(receipts);
}

exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getReceipts = getReceipts;
