/**
 * @author Scott Normore
 * @description A route area for admin functionalites. All of these
 * routes reuqired that the logged in user is an admin.
*/

const express = require('express');
const { check } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

require('dotenv').config();

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');
const accountController = require('../controllers/account-controllers');
const inquiryController = require('../controllers/inquiry-controllers');
const Token = require('../models/refreshToken');
const Account = require('../models/account');

const router = express.Router();

/* 
* Middle ware function to verify if user is admin
* Modify cookies of function to fit deployment
*/
router.use(async (req, res, next) => {
    try{
        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        }
        else {
            try{
                if(req.body.refreshToken != null && req.body.accessToken != null){
                    let rToken;
                    jwt.verify(req.body.refreshToken, process.env.REFRESH_TOKEN_SECRET, function(err, decoded) {
                        if(err){
                            console.log(err)
                            res.json({"message":"Invalid Tokens"})
                            return;
                        }else{
                            rToken=decoded
                        }
                    });
                    let aToken;
                    jwt.verify(req.body.accessToken, process.env.ACCESS_TOKEN_SECRET, function(err, decodedagain) {
                        if(err){
                            console.log(err)
                            res.json({"message":"Invalid Tokens"})
                            return;
                        }else{
                            aToken = decodedagain
                        }
                    });

                    let existingRefreshToken;
                    let existingAccount;
                    
                    try{
                        existingRefreshToken = await Token.findById(rToken._id);
                        existingAccount = await Account.findById(rToken.userId);
                    } catch (err) {

                    }
                    if(existingRefreshToken == null || existingAccount == null){
                        res.json({"message" : "No good!"})
                        return;
                    }

                    if(rToken.token === existingRefreshToken.token && aToken.email === existingAccount.email && aToken.auid === existingAccount.authorization && existingAccount.authorization === "Admin"){
                        try{

                            await existingRefreshToken.remove();

                            const newRToken = await new Token({
                                userId: existingAccount._id,
                                token: crypto.randomBytes(32).toString("hex"),
                            }).save()

                            const encryptedNewRToken = jwt.sign(newRToken.toObject(), process.env.REFRESH_TOKEN_SECRET);
                            res.cookie("HP_refreshToken", encryptedNewRToken);
                            res.locals.email = existingAccount.email;
                            
                            next();
                        }catch(err){
                            res.json({"Message": "Error has occured"});
                            return;
                        }
                    }
                    else{
                        res.json({"Message": "Unauthorized"});
                        return;
                    }
                }
                else{
                    res.json({"Message": "Unauthorized"});
                    return;
                }
            }catch(err){
                res.json({"Message": "Unauthorized"});
                return;
            }
        }
    }catch(err){
        res.json({"Message": "error has occured"});
        return;
    }
});

//admin routes

router.post('/getaccs', accountController.getAccounts);
router.post('/getinquirys', inquiryController.getInquirys)
router.post('/getjobs', jobController.getJobs);
router.post('/getcustomers', customerController.getCustomers);
router.post('/gettechnicians',technicianController.getTechnicians); 
router.post('/gettechinfo',technicianController.adminGetTechInfo);
router.post('/getjobsbycust', jobController.getJobsByCust);
router.post('/getjobsbytech', jobController.getJobsByTech);
router.post('/addservicetotech', technicianController.addProfession);
router.post('/removeservicefromtech',technicianController.removeProfession);
router.post('/adminaddtech',technicianController.addTechAccount);
router.patch('/adminupdatetechaccount',technicianController.adminUpdateTechAccount);
router.patch('/adminupdatecustomer',customerController.adminUpdateProfile);
router.patch('/adminassignjob',jobController.adminAssignJob);
router.post('/getjobbyid', jobController.getJobById);
router.post('/removeinquiry', inquiryController.removeInquiry);


module.exports = router;