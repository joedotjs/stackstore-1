var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Review'
	}]
});

module.exports = mongoose.model('Filling', schema);