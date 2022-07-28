const express = require('express');
const { check } = require('express-validator');

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');
const accountController = require('../controllers/account-controllers');
const inquiryController = require('../controllers/inquiry-controllers');

const router = express.Router();

//routes purely for testing.

//router.post('/test1',jobController.customerGetReceipts);
//router.post('/test2',jobController.techGetReceipts);

module.exports = router;