/**
 * @author Scott Normore
 * @description A route area for admin functionalites. All of these
 * routes reuqire no login state
*/

const express = require('express');
const validator = require('express-validator');

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');
const accountController = require('../controllers/account-controllers');
const inquiryController = require('../controllers/inquiry-controllers');

const router = express.Router();
//general routes/ no account required routes

router.post('/login',
    [validator.check('email').not().isEmpty(),
    validator.check('password').not().isEmpty()],
    accountController.login);
    
router.post('/signup', 
    [validator.check('email').not().isEmpty(), 
    validator.check('password').not().isEmpty(),
    validator.check('password').isLength({min:4}),
    validator.check('fName').not().isEmpty(),
    validator.check('lName').not().isEmpty(),
    validator.check('street').not().isEmpty(),
    validator.check('postalCode').not().isEmpty(),
    validator.check('number').not().isEmpty()],
    accountController.signUp);

router.post('/createinquiry', inquiryController.createInquiry);
router.post('/createjob',jobController.createJob);

module.exports = router;
