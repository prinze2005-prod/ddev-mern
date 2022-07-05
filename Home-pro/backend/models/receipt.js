const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    job_id: { type: Number, required: true },
    serviceName: { type: String, required: true },
    duration: {type: Number, required: true},    
    first_2_hour_charge: {type: Number, required: true},
    additional_per_hour: {type: Number, required: true},
    total_charge: {type: Number, required: true}
});

module.exports = mongoose.model('receipt', receiptSchema, 'Receipts');