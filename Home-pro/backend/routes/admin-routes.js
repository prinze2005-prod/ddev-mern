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

router.get('/getaccs', accountController.getAccounts);
router.get('/getinquirys', inquiryController.getInquirys)
router.get('/getjobs', jobController.getJobs);
router.get('/getcustomers', customerController.getCustomers);
router.get('/gettechnicians',technicianController.getTechnicians); 
router.post('/getjobsbycust', jobController.getJobsByCust);
router.post('/getjobsbytech', jobController.getJobsByTech);
router.post('/addservicetotech', technicianController.addProfession);
router.post('/removeservicefromtech',technicianController.removeProfession);


module.exports = router;