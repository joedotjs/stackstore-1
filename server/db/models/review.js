var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
    summary: String,
    description: String,
    stars: Number
});

module.exports = mongoose.model('Review', schema);