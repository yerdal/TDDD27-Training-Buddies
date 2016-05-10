var React = require('react');
var ActivitiesList = require("./ActivitiesList.jsx");
var ActivitiesStore = require("../stores/activitiesStore");
var ActivityInfo = require('./ActivityInfo.jsx');

module.exports = React.createClass({

	getInitialState: function(){

		return{
			usrActivities: this.props.usrActivities
		};		
	},

	componentWillReceiveProps:function(nextProps){
		this.setState({
			usrActivities:nextProps.usrActivities
		});

	},	

	render: function(){
		//console.log("usrActRender", this.state.usrActivities);
		return( 
				<ActivitiesList activities={this.state.usrActivities} showForm={false} />
			)
	}


})