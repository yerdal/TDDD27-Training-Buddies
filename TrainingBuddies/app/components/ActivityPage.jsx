var React = require("react");
var ReactDOM = require("react-dom");
var ActivitiesList = require("./ActivitiesList.jsx");
var ActivitiesStore = require("../stores/activitiesStore");
var InstantSearchBox = require("./InstantSearchBox.jsx");
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
		return(
			<div className="greyBack">
				<InstantSearchBox activities={this.state.activities} user={this.props.user} />
			</div>
			)
	}
})



