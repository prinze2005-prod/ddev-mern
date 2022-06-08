const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const customersSchema = new Schema({
    cust_email: { type: String, required: true },
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
    }   
);
module.exports = mongoose.model('Customers', customersSchema, 'Customers');