var React = require('react');
var ActivitiesList = require("./ActivitiesList.jsx");
var ActivitiesStore = require("../stores/activitiesStore");

module.exports = React.createClass({

	getInitialState: function(){

		return{
			joinedAct: this.props.joinedActivities
		};		
	},

	componentWillReceiveProps:function(nextProps){
		this.setState({
			joinedAct:nextProps.joinedActivities
		});

	},

	render: function(){
		return( 
				<ActivitiesList activities={this.state.joinedAct} user={this.props.user} showForm={false} />
			)	
	}


})