const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Job = require('../models/job');
const Receipt = require('../models/receipt');

const getJobs = async (req, res, next) => {
  const jobs = await Job.find().exec();
  res.json(jobs);
}

const getJobsByCust= async(req,res,next) => {
  //to modify to use token job for customer
  const jobs = await Job.find({cust_email:req.body.email}).exec()
  res.json(jobs);
}

const getJobsByTech = async(req,res,next) => {
  //to modify to use token job for tech
  const jobs = await Job.find({tech_email:req.body.email}).exec()
  res.json(jobs);
}

const customerGetJobs = async(req,res,next) => {
  const jobs = await Job.find({cust_email:res.locals.email}).exec()
  res.json(jobs);
}

const techGetJobs = async(req,res,next) => {
  const jobs = await Job.find({tech_email:res.locals.email}).exec()
  res.json(jobs);
}

const getJobById = async(req,res,next) => {
  const job = await Job.findOne({job_id : req.body.job_id})
  res.json(job);
}

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
    service_id: req.body.service,
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

exports.getJobsByTech = getJobsByTech;
exports.getJobsByCust = getJobsByCust;
exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getReceipts = getReceipts;
exports.customerGetJobs = customerGetJobs;
exports.techGetJobs = techGetJobs;
