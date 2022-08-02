const serviceContoller = require('./service-controllers');

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Job = require('../models/job');
const Receipt = require('../models/receipt');
const technician = require('../models/technician');


//job get functions

const getJobs = async (req, res, next) => {
  const jobs = await Job.find().exec();
  res.json(jobs);
}

const getJobsByCust= async(req,res,next) => {
  const jobs = await Job.find({cust_email:req.body.email}).exec()
  res.json(jobs);
}

const getJobsByTech = async(req,res,next) => {
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

const techGetInProgressJobs = async(req, res, next) => {
  const jobs = await Job.find({tech_email:res.locals.email, status:"assigned"})
  res.json(jobs);
}

const techGetCompletedJobs = async(req, res, next) => {
  const jobs = await Job.find({tech_email:res.locals.email, status:"completed"})
  res.json(jobs);
}

const getUnassignedJobs = async(req,res,next) => {
  const jobs = await Job.find({status:"unassigned"}).exec()
  res.json(jobs);
}

const getJobById = async(req,res,next) => {
  const job = await Job.findOne({job_id : req.body.jobID});
  res.json(job);
}

//job create functions

const createJob = async (req,res,next) => {
  console.log(req.body);
  console.log(req.body.email);
  try{
  console.log(req.body.start_time) 
  const newJob = new Job({
    first_name: req.body.fname,
    last_name: req.body.lname,
    tech_email: "unassigned",
    cust_email: req.body.email,
    status: "unassigned",
    description: req.body.description,
    service_id: req.body.service,
    start_time: req.body.start_time,
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

//job set functions

const techAssignJob = async(req, res, next) =>{
  try{
    const job = await Job.findOne({job_id : req.body.jobID})
    job.tech_email=res.locals.email;
    job.status = "assigned";
    await job.save();
    res.json({"message":"success"});
  }catch(err){
    res.json({"message":"error has occured"});
  }
}

const techCompleteJob = async(req, res, next) =>{
  try{
    const job = await Job.findOne(req.body.jobID)
    job.status = "completed";
    /*
    const service = await serviceContoller.getServiceById(job.service_id)

    const duration = req.body.duration;
    let total;
    if(duration <= 2 ){
      total = service.base_cost;
    }else{
      total = (req.body.duration * (service.rate_per_hour - 2)) + service.base_cost;
    }
    const newReceipt = new Receipt({
      job_id: job.job_id,
      serviceName: service.serviceName,
      duration: req.body.duration,
      first_2_hour_charge: service.base_cost,
      additional_per_hour: service.additional_per_hour,
      total_charge: total
    })
    */
    /*
    const newReceipt = new Receipt({
      job_id: job.job_id,
      serviceName: "PlaceHolder",
      duration: 2,
      first_2_hour_charge: 180,
      additional_per_hour: 90,
      total_charge: 270
    })
    */
    //await newReceipt.save();
    await job.save();

    res.json({"message":"success"});
  }catch(err){
    res.json({"message":"error has occured"});
  }
}

const techUnassignJob = async(req, res, next) =>{
  try{
    const job = await Job.findOne(req.body.jobID)
    job.tech_email="unassigned";
    job.status = "unassigned";
    await job.save();
    res.json({"message":"success"});
  }catch(err){
    res.json({"message":"error has occured"});
  }
}


const adminAssignJob = async(req,res,next) => {
  try{
    const job = await Job.findOne(req.body.jobID)
    job.tech_email=req.body.email;
    job.start_time=req.start_tiime;
    job.status = "assigned";
    await job.save();
    res.json({"message":"success"});
  }catch(err){
    res.json({"message":"error has occured"});
  }
}

//receipt get functions


const customerGetReceipts = async (req, res, next) =>{
  try{
    const jobs = await Job.find({cust_email:res.locals.email})
    //const jobs = await Job.find({cust_email:req.body.email})
    const receipts =[];
    for(let job of jobs){
      if(job.status === "completed"){
        const receipt = await Receipt.findOne({job_id: job.job_id})
        receipts.push(receipt);
      }
    }
    res.json(receipts);
  }catch(err){
    console.log(err);
    res.json({"message":"error has occured"});
  } 
}

const techGetReceipts = async (req, res, next) =>{
  try{
    const jobs = await Job.find({tech_email:res.locals.email})
    //const jobs = await Job.find({tech_email:req.body.email})
    const receipts =[];
    for(let job of jobs){
      if(job.status === "completed"){
        const receipt = await Receipt.findOne({job_id: job.job_id})
        receipts.push(receipt);
      }
    }
    res.json(receipts);
  }catch(err){
    console.log(err);
    res.json({"message":"error has occured"});
  } 
}

const getReceipts = async (req, res, next) => {
  const receipts = await Receipt.find().exec();
  res.json(receipts);
}




exports.getUnassignedJobs = getUnassignedJobs;
exports.getJobsByTech = getJobsByTech;
exports.getJobsByCust = getJobsByCust;
exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getReceipts = getReceipts;
exports.customerGetJobs = customerGetJobs;
exports.techGetJobs = techGetJobs;
exports.techAssignJob = techAssignJob;
exports.techCompleteJob = techCompleteJob;
exports.techUnassignJob = techUnassignJob;
exports.customerGetReceipts = customerGetReceipts;
exports.techGetReceipts = techGetReceipts;
exports.adminAssignJob = adminAssignJob;
exports.techGetInProgressJobs = techGetInProgressJobs;
exports.techGetCompletedJobs = techGetCompletedJobs;