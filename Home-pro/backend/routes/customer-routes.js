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

router.patch('/editprofile',customerController.updateProfile);
router.patch('/updatepassword',accountController.updatePassword);

module.exports = router;