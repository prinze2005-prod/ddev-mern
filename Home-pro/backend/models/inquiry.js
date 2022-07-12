const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({
    inquiry_id: { type: Number},
    job_id: {type: Number},
    email: { type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('inquiry', inquirySchema, 'Inquirys');