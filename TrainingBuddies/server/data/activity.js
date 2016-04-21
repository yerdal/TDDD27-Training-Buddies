var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
	name: String,
	description: String
});

module.exports = mongoose.model("activity", activitySchema);