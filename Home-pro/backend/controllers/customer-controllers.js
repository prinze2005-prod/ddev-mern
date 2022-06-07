const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Customer = require('../models/customer');

const getCustomers = async (req, res, next) => {
  const customers = await Customer.find().exec();
  res.json(customers);
}

exports.getCustomers = getCustomers;
