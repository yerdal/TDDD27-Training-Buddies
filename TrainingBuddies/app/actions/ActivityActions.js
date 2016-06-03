var dispatcher = require("../dispatcher");
/* Send the activity and type of action to the dispatcher */
module.exports = {

	addActivity:function(activity){
		dispatcher.dispatch({
			activity:activity,
			type:"activity:addActivity"
		});
	},
	deleteActivity:function(activity){
		dispatcher.dispatch({
			activity:activity,
			type:"activity:deleteActivity"
		});
	},
	editActivity:function(activity){
		dispatcher.dispatch({
			activity:activity,
			type:"activity:editActivity"
		})
	}
}