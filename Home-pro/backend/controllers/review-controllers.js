/**
 * @author Scott Normore
 * @description A controller for reviews. Handles most database interactions
 * that are interacting with the reviews object in our database
*/

const serviceContoller = require('./service-controllers');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const Review = require('../models/review');

//retreives all reviews

const getReviews = async (req, res, next) => {
    const reviews = await Review.find().exec();
    res.json(reviews);
}


//retreives all reviews that are directed at the logged in technican

const techGetReviews = async (req, res, next) => {
    const reviews = await Review.find({tech_email : res.locals.tech_email});
    res.json(reviews);
}

exports.techGetReviews = techGetReviews;
exports.getReviews = getReviews;