var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	type: String, // custom or pre-designed
	price: {
		default: 50,
		type: Number
	},
	shape: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shape'
	},
	icing: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Icing'
	},
	layers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Layer'
	}],
	reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Review'
	}]
});

module.exports = mongoose.model('Cake', schema);