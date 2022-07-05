const express = require('express');
const { check } = require('express-validator');

const accountController = require('../controllers/account-controllers');

const router = express.Router();

router.post('/login', accountController.login);
router.post('/signup', accountController.signUp);

//testing purposes only
router.get('/get', accountController.getAccounts);

module.exports = router;
