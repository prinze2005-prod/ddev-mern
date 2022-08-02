const serviceContoller = require('./service-controllers');

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Review = require('../models/review');

//review get functions

const getReviews = async (req, res, next) => {
    const reviews = await Review.find().exec();
    res.json(reviews);
}

const techGetReviews = async (req, res, next) => {
    const reviews = await Review.find({tech_email : res.locals.tech_email});
    res.json(reviews);
}

exports.techGetReviews = techGetReviews;
exports.getReviews = getReviews;