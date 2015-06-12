var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    description: String,
    storeId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Store'
	}
});

module.exports = mongoose.model('Shape', schema);