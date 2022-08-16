/**
 * @author Madu Madhavan, Scott Normore
 * @description A model for the account database object. Used by mongoose
 * to fetch, validate, and save data to the database.
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email: { type: String, required: true,  unique: true },
    password: { type: String, required: true, minlength: 4  },
    authorization: {type: String, required: true},
    resetpassword: { type: String }
    
});

module.exports = mongoose.model('account', accountSchema, 'Accounts');