var React = require("react");
var ReactDOM = require("react-dom");
var ActivitiesList = require("./components/ActivitiesList.jsx");
var ActivitiesStore = require("./stores/activitiesStore");
//var _activities = [];

module.exports = React.createClass({

	getInitialState: function(){
		return{activities: []};
	},
	// listens for changes in store
	componentDidMount: function(){
		ActivitiesStore.onChange(this.getActivitiesCallback);
	},

	getActivitiesCallback:function(theActivities){
		
		this.setState({activities: theActivities});
	},

	render:function(){
		console.log(this.state.activities);
		return(<ActivitiesList activities={this.state.activities}  />)
	}
})



