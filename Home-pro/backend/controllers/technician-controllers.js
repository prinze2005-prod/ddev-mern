/**
 * @author Scott Normore
 * @description A controller for technicians. Handles most database interactions
 * that are interacting with the technician object in our database
*/

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Technician = require('../models/technician');
const Account = require('../models/account');
const Customer = require('../models/customer');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

//used for technician to update their own account
const updateTechAccount = async (req,res,next) => {
    let existingAccount;
    let existingTech;
    try{
      existingAccount = await Account.findOne({email: res.locals.email});
    }catch(err){
      res.json({message: err});
      return;
    }
    try{
      existingTech = await Technician.findOne({tech_email: res.locals.email});
    }catch(err){
      res.json({message: err});
      return
    }
  
    if(existingAccount == null || existingTech == null){
      res.json({message: "Error in request, please re-login"});
      return
    }
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      existingAccount.password=hashedPassword;
      let error1 = existingAccount.validateSync();
      if(error1 !== undefined){
        console.log(error1);
        throw 'failed validation';
      }
      existingTech.name = req.body.name;
      existingTech.address.street = req.body.street;
      existingTech.address.postalCode = req.body.postalCode;
      existingTech.phoneNumber = req.body.pnumber;
      let error2 = existingTech.validateSync();
      if(error2 !== undefined){
        console.log(error2);
        throw 'failed validation';
      }
      await existingTech.save();
      await existingAccount.save();
      res.json({message: "Success!"});
    }catch(err){
      res.json({message: "Error has occured"});
    }
  };

//used for an admin to retreive tech info based on email
  const adminGetTechInfo = async (req,res,next) => {
    try{
      const existingTech = await Technician.findOne({tech_email: req.body.email});
      if(existingTech == null){
        res.json("error");
        return;
      }
      res.json(existingTech);
    }catch(err){
      res.json("error");
      return;
    }
  }

//used for tech to retreive more sensitive information based on their account
  const techGetTechInfo = async (req,res,next) => {
    try{
      const existingTech = await Technician.findOne({tech_email: res.locals.email});
      if(existingTech == null){
        res.json("error");
        return;
      }
      res.json(existingTech);
    }catch(err){
      res.json("error");
      return;
    }
  }  

  //used by an admin to update a tech account
  const adminUpdateTechAccount = async (req,res,next) => {
    let existingAccount;
    let existingTech;
    try{
      existingAccount = await Account.findOne({email: req.body.email});
    }catch(err){
      res.json({message: err});
      return;
    }
    try{
      existingTech = await Technician.findOne({tech_email: req.body.email});
    }catch(err){
      res.json({message: err});
      return
    }
  
    if(existingAccount == null || existingTech == null){
      res.json({message: "Error in request, please re-login"});
      return
    }
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      existingAccount.password=hashedPassword;
      let error1 = existingAccount.validateSync();
      if(error1 !== undefined){
        console.log(error1);
        throw 'failed validation';
      }
      existingTech.name = req.body.name;
      existingTech.address.street = req.body.street;
      existingTech.address.postalCode = req.body.postalCode;
      existingTech.phoneNumber = req.body.number;
      existingTech.services = req.body.services;
      console.log(existingTech);
      let error2 = existingTech.validateSync();
      if(error2 !== undefined){
        console.log(error2);
        throw 'failed validation';
      };
      await existingTech.save();
      await existingAccount.save();
      res.json({message: "Success!"});
    }catch(err){
      res.json({message: "Error has occured"});
    }
  };

//used by an admin to create a technicain account

const addTechAccount = async (req,res,next) => {
  try{
    let existingUser;
    try{
      existingUser = await Account.findOne({email: req.body.email})
    }catch(err){
      res.json({message: err});
      return;
    }
    if (!(!existingUser)){
      res.json({message: "User already exists"});
      return;
    }
    try{
      console.log(req.body.password);
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newAccount= new Account({
        email: req.body.email,
        password: hashedPassword,
        authorization: "Technician"
      })

      const newTech=  Technician({
        tech_email: req.body.email,
        name: req.body.name,
        address: {
          street: req.body.street,
          city: "Calgary",
          province: "Alberta",
          postalCode: req.body.postalCode
        },
        services: req.body.services,
        phoneNumber: req.body.number
      })

      let errorA = newAccount.validateSync();
      let errorT = newTech.validateSync();
      if(errorA !== undefined || errorT !== undefined){
        console.log(errorA);
        console.log(errorT);
        throw 'failed validation';
      }
      console.log("I was ran!");
      await newAccount.save();
      console.log("I was ran too!");
      await newTech.save();
      console.log("I was ran three");
      res.json({"message": 'success'});
    }catch(err){
      res.json({"message":err})
    }
  }catch(err){
    res.json({"message":"error has occured"});
  }
}

//used to retreive all technicans
const getTechnicians = async (req,res,next) =>{
    const technicians = await Technician.find().exec();
    res.json(technicians);
}

//used add a single progession
const addProfession = async(req,res,next) =>{
  const technician = await Technician.findOne({tech_email:req.body.email}).exec();
  technician.services.push(req.body.serviceNumber);
  await technician.save();
  res.json("updated");
}
//used to remove a single profession
const removeProfession = async(req,res,next) =>{
  const technician = await Technician.findOne({tech_email:req.body.email}).exec();
  const index = technician.services.indexOf(req.body.serviceNumber);
  if(index == -1){
    res.json({"message":"tech does not provide servece"});
    return;
  }
  technician.services.splice(index,1);
  await technician.save();
  res.json({"message":"updated"});
}
//used to create a technican and their account
const createTech = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json("Invalid Validation");
      return;
    }
    let existingUser;
    try{
      existingUser = await Account.findOne({email: req.body.email})
    }catch(err){
      res.json({message: err});
      return;
    }
    if (!(!existingUser)){
      res.json({message: "User already exists"});
      return;
    }
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newAccount= new Account({
        email: req.body.email,
        password: hashedPassword,
        authorization: "Technician"
      })
      const newTech= new Technician({
        tech_email: req.body.email,
        name: req.body.name,
        address: {
            street: req.body.street,
            city: "Calgary",
            province: "Alberta",
            postalCode: req.body.postalCode
        },
        phoneNumber: req.body.number
      })
      console.log("foo")
      let errorA = newAccount.validateSync();
      let errorC = newTech.validateSync();
      console.log("foo2");
      if(errorA !== undefined || errorC !== undefined){
        console.log(errorA);
        console.log(errorC);
        throw 'failed validation';
      }
      await newAccount.save();
      await newTech.save();
      res.json({message: 'success'});
    }catch(err){
      res.json({message: err});
      return;
    }
    return;
  };


exports.addProfession = addProfession;
exports.removeProfession = removeProfession;
exports.getTechnicians = getTechnicians;
exports.updateTechAccount = updateTechAccount;
exports.adminUpdateTechAccount = adminUpdateTechAccount;
exports.addTechAccount = addTechAccount;
exports.createTech = createTech;
exports.adminGetTechInfo = adminGetTechInfo;
exports.techGetTechInfo = techGetTechInfo;