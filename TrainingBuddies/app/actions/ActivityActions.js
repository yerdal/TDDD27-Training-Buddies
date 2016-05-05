var dispatcher = require("../dispatcher");

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
	joinActivity:function(activity){
		dispatcher.dispatch({
			activity:activity,
			type:"activity:joinActivity"
		});
	}
}