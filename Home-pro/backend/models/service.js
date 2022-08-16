/**
 * @author Madu Madhavan, Scott Normore
 * @description A model for the service database object. Used by mongoose
 * to fetch, validate, and save data to the database.
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    service_id: { type: Number, required: true },
    serviceName: { type: String, required: true },
    base_cost: {type: Number, required: true},
    rate_per_hour: {type: Number, required: true},    
    description: {type: String}
});
module.exports = mongoose.model('service', serviceSchema, 'Services');