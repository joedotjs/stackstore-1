var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},

    summary: { type: String, required: true },

    description: { type: String, required: true },
    
    stars: {
    	type: Number,
    	min: 1,
    	max: 5
    }

});

module.exports = mongoose.model('Review', schema);