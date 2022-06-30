const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cust_id: { type: Number, required: true },
    fName: { type: String, required: true },
    lName: { type: String, required: true },
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

module.exports = mongoose.model('customer', customerSchema, 'Customers');
