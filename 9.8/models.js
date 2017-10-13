const mongoose = require('mongoose');

var shipmentSchema = new mongoose.Schema({
	givenName: {
		type: String,
		required: true
	},
	
	surname: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('shipmentSchema', shipmentSchema);