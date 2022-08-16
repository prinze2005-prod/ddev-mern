/**
 * @author Madu Madhavan, Scott Normore
 * @description A model for the review database object. Used by mongoose
 * to fetch, validate, and save data to the database.
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reviewsSchema = new Schema({
    tech_email: { type: String, required: true},
    cust_email: { type: String, required: true },
    job_id: { type: Number, required: true },
    rating: { type: Number },
    description: {type: String}
});
module.exports = mongoose.model('review', reviewsSchema, 'Reviews');