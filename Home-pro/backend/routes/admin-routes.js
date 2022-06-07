const express = require('express');
const { check } = require('express-validator');

const jobController = require('../controllers/job-controllers');
const customerController = require('../controllers/customer-controllers');
const technicianController = require('../controllers/technician-controllers');

const router = express.Router();

router.get('/getjobs', jobController.getJobs);
router.get('/getcustomers', customerController.getCustomers);
router.get('/gettechnicians',technicianController.getTechnicians); //cust id in reveiws are null


module.exports = router;