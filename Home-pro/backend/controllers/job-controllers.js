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
    //fname: req.body.fname,
    //lname: req.body.lname,
    tech_email: "unassigned",
    cust_email: req.body.email,
    //start_time: req.body.date,
    status: "unassigned",
    description: req.body.description,
    //service_id: req.body.service,
    service_id: 2,
    address:{
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode
    },
    phoneNumbers: {
      type: req.body.ptype,
      number: req.body.pnumber
    }
  })
  console.log("I was ran!");
  const result = await newJob.save();
  console.log("I was ran too!");
  res.json(result);
  }catch(err){
    console.log()
  }

  
};

const getReceipts = async (req, res, next) => {
  const receipts = await Receipt.find().exec();
  res.json(receipts);
}

exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getReceipts = getReceipts;
