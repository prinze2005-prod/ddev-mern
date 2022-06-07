const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Job = require('../models/job');
const Receipt = require('../models/receipt');

const getJobs = async (req, res, next) => {
  const jobs = await Job.find().exec();
  res.json(jobs);
}



const createJob = async (req,res,next) => {
  const newJob = new Job({
    tech_email: "unassigned",
    cust_email: req.body.email,
    status: "unassigned",
    duration: 0,
    start_time: req.body.date,
  })
}

const getReceipts = async (req, res, next) => {
  const receipts = await Receipt.find().exec();
  res.json(receipts);
}

exports.getJobs = getJobs;
exports.getReceipts = getReceipts;
