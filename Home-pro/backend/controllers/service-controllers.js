/**
 * @author Scott Normore
 * @description A controller for services. Handles most database interactions
 * that are interacting with the service object in our database
*/

const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Service = require('../models/service');


//used to retreive all services

async function getServices(){
    const services = await Service.find().exec();
    return services;
}

//retreives a single service based on service id
async function getServiceById(serID){
    const service = await Service.findOne({service_id: serID})
    return service;
}

exports.getServices = getServices;
exports.getServiceById = getServiceById;