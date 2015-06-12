var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	description: String,
	thumbnail: String,
	address: String,
	phone: String,
    owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	employees: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
});

module.exports = mongoose.model('Store', schema);