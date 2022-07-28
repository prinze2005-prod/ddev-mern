const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    job_id: { type: Number},
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    tech_email: { type: String, required: true},
    cust_email: { type: String, required: true},
    status: { type: String, required: true },
    start_time: { type: String, required: true},
    description: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        province: {type: String, required: true},
        postalCode: {type: String, required: true}
    },
    phoneNumber: { type: Number, required: true },
    service_id: { type: Number, required: true }
});

module.exports = mongoose.model('job', jobSchema, 'Jobs');

