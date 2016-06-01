var $ = require("jquery");
var promise = require("es6-promise");

var resourceUrl = "/api/activities";
// REST api calls
module.exports = {
	addActivity: function(activity){
		var Promise = promise.Promise;		
		return new Promise(function(resolve, reject){
			$.ajax({
				url: resourceUrl,
				data: JSON.stringify(activity),
				method: "POST",
				dataType: "json",
				contentType: "application/json",
				success: resolve,
				error: reject
			});
		});
	},

	getActivities: function(){
		var Promise = promise.Promise;
		return new Promise(function(resolve, reject){
			$.ajax({
				url: resourceUrl,
				method: "GET",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	},

	deleteActivity: function(activity){
		var Promise = promise.Promise;
		return new Promise(function(resolve, reject){
			$.ajax({
				url: resourceUrl + "/" + activity._id, // uses the optional route (id)
				method: "DELETE",
				dataType: "json",
				success: resolve,
				error: reject
			});
		});
	},

	editActivity: function(activity){
		var Promise = promise.Promise;
		return new Promise(function(resolve, reject){
			$.ajax({
				url: resourceUrl + "/" + activity._id, // uses the optional route (id)
				data: JSON.stringify(activity),
				method: "PUT",
				dataType: "json",
				contentType: "application/json",
				success: resolve,
				error: reject
			});
		});
	}
}