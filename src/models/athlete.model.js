const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    country: String
});


module.exports = mongoose.model('athlete', athleteSchema);