var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	type: String, // custom or stock
	quantity: {
		type: Number,
		default: 1 // if cake is custom, dont show
	},
	image: {
		type: String,
		default: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97150&w=200&h=150'
	},
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