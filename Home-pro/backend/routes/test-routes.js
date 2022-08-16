/**
 * @author Scott Normore
 * @description A route area for testing purposes. Useful for development
*/

const express = require('express');
const { check } = require('express-validator');

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');
const accountController = require('../controllers/account-controllers');
const inquiryController = require('../controllers/inquiry-controllers');

const router = express.Router();

//feel free to put some test routes here

module.exports = router;