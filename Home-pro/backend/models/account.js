const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email: { type: String, required: true,  unique: true },
    password: { type: String, required: true, minlength: 4  },
    authorization: {type: String, required: true},
    resetpassword: { type: String }
    
});

//to edit
//module.exports = mongoose.model('account', accountSchema);

module.exports = mongoose.model('account', accountSchema, 'Accounts');