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
		return( 
				<ActivitiesList activities={this.state.usrActivities} user={this.props.user} showForm={false} />
			)
	}


})