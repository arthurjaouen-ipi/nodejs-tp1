const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: String,
    athletes: Array
});

module.exports = mongoose.model('sport', sportSchema);