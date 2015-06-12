var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    storeId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Store'
	},
    reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Review'
	}]
});

module.exports = mongoose.model('Icing', schema);