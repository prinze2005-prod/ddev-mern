const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const techSchema = new Schema({
    tech_id: {type: String},
    tech_email: { type: String, required: true,  unique: true },
    name: { type: String, required: true }, 
    address: { 
            street: {type: String, required: true},
            city: {type: String, required: true},
            province: {type: String, required: true},
            postalCode: {type: String, required: true}
    },
    services: [{ type:Number, required:true }],
    phoneNumber:{ type: Number, required: true }
});
module.exports = mongoose.model('technician', techSchema, 'Technicians');

/*

    location: {
        type: {
          type: String, 
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }  


*/