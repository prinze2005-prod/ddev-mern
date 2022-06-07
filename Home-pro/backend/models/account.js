const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    id: { type: Number },
    email: { type: String, required: true,  unique: true },
    password: { type: String, required: true, minlength: 4  },
    resetpassword: { type: String }
    
});

//to edit
//module.exports = mongoose.model('account', accountSchema);

module.exports = mongoose.model('account', accountSchema, 'Accounts');