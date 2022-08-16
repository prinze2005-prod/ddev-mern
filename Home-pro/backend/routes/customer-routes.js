/**
 * @author Scott Normore
 * @description A route area for customer functionalites. All of these
 * routes reuqired that the logged in user is a customer.
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
* Middle ware function to verify if user is customer
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

                    if(rToken.token === existingRefreshToken.token && aToken.email === existingAccount.email && aToken.auid === existingAccount.authorization && existingAccount.authorization === "Customer"){
                        try{

                            await existingRefreshToken.remove();

                            const newRToken = await new Token({
                                userId: existingAccount._id,
                                token: crypto.randomBytes(32).toString("hex"),
                            }).save()

                            const encryptedNewRToken = jwt.sign(newRToken.toObject(), process.env.REFRESH_TOKEN_SECRET);

                            console.log(encryptedNewRToken);

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


//customer routes

router.post('/getLoggedInInfo',customerController.getLoggedInInfo);
router.post('/getreceipts',jobController.customerGetReceipts);
router.post('/getJobs',jobController.customerGetJobs);
router.patch('/editprofile',accountController.updateCustomerAccount);

module.exports = router;