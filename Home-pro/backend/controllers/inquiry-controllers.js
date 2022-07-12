const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Inquiry = require('../models/inquiry');

const getInquirys = async (req, res, next) => {
  const inquiries = await Inquiry.find().exec();
  res.json(inquiries);
}

const createInquiry = async (req,res,next) => {
  console.log(req.body);
  console.log(req.body.email);
  try{
    let newServiceNumber;
    if(req.body.serviceNumber == null){
        newServiceNumber = 0;
    }else{
        newServiceNumber=req.body.serviceNumber
    }
    const newInquiry= new Inquiry({
        job_id: newServiceNumber,
        email: req.body.email,
        date: new Date(),
        description: req.body.description
    })
  let error =  newInquiry.validateSync();
  console.log(error);
  if(error !== undefined){
    throw 'failed validation';
  }
  console.log("I was ran!");
  const inquiry = await newInquiry.save();
  console.log("I was ran too!");
  res.json({message: 'success'});
  }catch(err){
    res.json({message: 'Unable to save to database'});
  }
};

exports.createInquiry = createInquiry;
exports.getInquirys = getInquirys;