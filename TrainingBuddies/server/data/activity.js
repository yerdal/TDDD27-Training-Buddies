var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
	name: String,
	location: String,
	description: String,
	level: String

});

module.exports = mongoose.model("activity", activitySchema);