const mongoose = require('mongoose');

var shipmentSchema = new mongoose.Schema({
	givenName: {
		type: String,
		required: true
	},
	
	surname: {
		type: String,
		required: true
	},

	/*address: {
		streetAddress: String,
		city: String,
		state: String,
		zip: String
	}*/
});

module.exports = mongoose.model('shipmentSchema', shipmentSchema);