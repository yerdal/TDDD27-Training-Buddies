var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
	name: String,
	location: String,
	description: String,
	level: String,
	owner: Array,
	date:String,
	participants: Array

});

module.exports = mongoose.model("activity", activitySchema);