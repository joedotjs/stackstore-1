var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    type: String,
    description: String
});

module.exports = mongoose.model('Shape', schema);