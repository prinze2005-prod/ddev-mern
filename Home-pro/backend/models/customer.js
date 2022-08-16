/**
 * @author Madu Madhavan, Scott Normore
 * @description A model for the customer database object. Used by mongoose
 * to fetch, validate, and save data to the database.
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cust_email: { type: String, required: true },
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        province: {type: String, required: true},
        postalCode: {type: String, required: true}
    },
    phoneNumber: { type: Number, required: true }
});

module.exports = mongoose.model('customer', customerSchema, 'Customers');
