const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const adminSchema = new Schema({
    pin: { type: Number, required: true },
    email: { type: String, required: true,  unique: true },
    password: { type: String, required: true, minlength: 4  },
    reset_password: { type: String }
    
});
module.exports = mongoose.model('Admin', adminSchema, 'Admin');