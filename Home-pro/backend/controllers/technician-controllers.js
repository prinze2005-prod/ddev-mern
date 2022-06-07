const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Technician = require('../models/technician');

const getTechnicians = async (req,res,next) =>{
    const technicians = await Technician.find().exec();
    res.json(technicians);
}

exports.getTechnicians = getTechnicians;