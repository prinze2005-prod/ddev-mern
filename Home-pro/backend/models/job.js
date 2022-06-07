const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    job_id: { type: Number},
    tech_email: { type: String, required: true},
    cust_email: { type: String, required: true},
    fName: { type: String, required: true },
    lName: { type: String, required: true },    
    status: { type: String, required: true },
    description: {type: String, required: true},
    duration: {type: Number},
    start_time: { type: Date, default: Date.now },
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        province: {type: String, required: true},
        postalCode: {type: String, required: true}
    },
    phoneNumbers: {
        type: {type: String, required: true},
        number: { type: Number, required: true }
    }
});

module.exports = mongoose.model('job', jobSchema, 'Jobs');