var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var schema = new mongoose.Schema({
	name: String,
	description: String,
	address: String,
	phone: String,
    owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	employees: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	thumbnail: {
		type: String,
		default: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97150&w=200&h=150'
	},
	reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Review'
	}]
});

module.exports = mongoose.model('Store', schema);