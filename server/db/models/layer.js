var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	position: Number,
    filling: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Filling'
	}
});

module.exports = mongoose.model('Layer', schema);