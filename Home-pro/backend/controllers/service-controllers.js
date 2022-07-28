const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Service = require('../models/service');

async function getServices(){
    const services = await Service.find().exec();
    return services;
}

async function getServiceById(serID){
    const service = await Service.findOne({service_id: serID})
    return service;
}

exports.getServices = getServices;
exports.getServiceById = getServiceById;