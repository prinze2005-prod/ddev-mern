const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const techSchema = new Schema({
    tech_id: {type: String},
    email: { type: String, required: true,  unique: true },
    name: { type: String, required: true },    
    address: { 
            street: {type: String, required: true},
            city: {type: String, required: true},
            province: {type: String, required: true},
            postalCode: {type: String, required: true}
        
    },
    reviews: {
            cust_id: {type: int, required: true},
            description: {type: String},
            rating: {type: Number, required: true}
       
    },
    services: { type:String },
    phoneNumbers:  {
                type: {type: String, required: true},
                number: { type: Number, required: true }                   
    },
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
});
module.exports = mongoose.model('Technicians', techSchema, 'Technician');