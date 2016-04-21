var React = require("react");
var ReactDOM = require("react-dom");
var ActivitiesList = require("./components/ActivitiesList.jsx");
var ActivitiesStore = require("./stores/ActivitiesStore");
var _activities = [];

var getActivitiesCallback = function(activities){
	_activities = activities;
	console.log(_activities);
	render();
}

ActivitiesStore.onChange(getActivitiesCallback);

function render(){
    ReactDOM.render(<ActivitiesList activities={_activities} />, document.getElementById("container"));    
}