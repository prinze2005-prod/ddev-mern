const express = require('express');
const { check } = require('express-validator');

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');
const accountController = require('../controllers/account-controllers');
const inquiryController = require('../controllers/inquiry-controllers');

const router = express.Router();

//to add app.use function to verify authorization

//to add validation

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



module.exports = router;