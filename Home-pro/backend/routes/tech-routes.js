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

//to add app.use function to verify authorization

//to add validation

router.use(async (req, res, next) => {
    if ('OPTIONS' === req.method) {
        //respond with 200
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

                //WIP

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

                console.log("DATABASE STUFF");
                console.log(existingAccount);
                console.log(existingRefreshToken);

                if(rToken.token === existingRefreshToken.token && aToken.email === existingAccount.email && aToken.auid === existingAccount.authorization){
                    try{
                        console.log("WE MATCH!! WE MATCH!!")

                        await existingRefreshToken.remove();

                        const newRToken = await new Token({
                            userId: existingAccount._id,
                            token: crypto.randomBytes(32).toString("hex"),
                        }).save()

                        const encryptedNewRToken = jwt.sign(newRToken.toObject(), process.env.REFRESH_TOKEN_SECRET);

                        console.log(encryptedNewRToken);

                        res.cookie("HP_refreshToken", encryptedNewRToken);

                        console.log("We did it!");

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
                //end of WIP
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
});



router.post('/test', async (req, res, next) => {
    console.log("I was Ran!")
    res.json({"message":"Hello "+res.locals.email+"!"})
})

router.patch('/unassignjob',jobController.techUnassignJob);
router.patch('/completejob',jobController.techCompleteJob);
router.patch('/assignjob',jobController.techAssignJob);
router.post('/getJobs',jobController.techGetJobs);
router.patch('/editprofile',technicianController.updateTechAccount);

module.exports = router;