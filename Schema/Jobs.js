const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const jobsSchema = new Schema({
    job_id: { type: Number },
    service_id: { type: Number, required: true },
    tech_email: { type: String, required: true },
    cust_email: { type: String, required: true },
    status: { type: String, required: true },
    start_time: { type: Date, default: Date.now },
    description: {type: String},
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    address: { 
            street: {type: String, required: true},
            city: {type: String, required: true},
            province: {type: String, required: true},
            postalCode: {type: String, required: true}       
     },
     phoneNumbers:  {
        type: {type: String, required: true},
        number: { type: Number, required: true }                  
    }
    
});
module.exports = mongoose.model('Jobs', jobsSchema, 'Jobs');