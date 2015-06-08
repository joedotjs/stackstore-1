var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	cake: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cake'
	},
	position: Number,
    filling: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Filling'
	}
});

module.exports = mongoose.model('Layer', schema);