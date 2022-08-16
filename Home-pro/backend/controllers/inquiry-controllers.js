/**
 * @author Scott Normore
 * @description A controller for inquiry. Handles most database interactions
 * that are interacting with the inquiry object in our database
*/

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Inquiry = require('../models/inquiry');
//fetches all inquries
const getInquirys = async (req, res, next) => {
  const inquiries = await Inquiry.find().exec();
  res.json(inquiries);
}
//generates an inquiry.
const createInquiry = async (req,res,next) => {
  console.log(req.body);
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

//delets an inquiry
const removeInquiry = async (req,res,next) => {
  try{
    const inquiry = await Inquiry.findOne({});
    inquiry.remove();
    res.json({message: 'success'});
  }catch(err){
    res.json({message: 'Unable to perform'});
  }
}

exports.removeInquiry = removeInquiry;
exports.createInquiry = createInquiry;
exports.getInquirys = getInquirys;