const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reviewsSchema = new Schema({
    tech_email: { type: String, required: true},
    cust_email: { type: String, required: true },
    job_id: { type: Number, required: true },
    rating: { type: Number },
    description: {type: String}
});