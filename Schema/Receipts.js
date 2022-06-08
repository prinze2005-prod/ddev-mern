const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const receiptsSchema = new Schema({
    job_id: { type: Number, required: true },
    serviceName: { type: String, required: true },
    duration: {type: double, required: true},    
    first_2_hour_charge: {type: double, required: true},
    additional_per_hour: {type: double, required: true},
    total_charge: {type: double, required: true}
    
});
module.exports = mongoose.model('Receipts', receiptsSchema, 'Receipts');