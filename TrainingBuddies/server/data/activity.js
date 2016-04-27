var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
	name: String,
	location: String,
	description: String

});

module.exports = mongoose.model("activity", activitySchema);