var React = require('react');
var ActivitiesList = require("./ActivitiesList.jsx");
var ActivitiesStore = require("../stores/activitiesStore");
module.exports = React.createClass({

	getInitialState: function(){

		return{
			joinedAct: this.props.joinedActivities,
			showPublicProfile:this.props.initialClicked
		};		
	},

	componentWillReceiveProps:function(nextProps){
		this.setState({
			joinedAct:nextProps.joinedActivities,
			showPublicProfile:this.props.initialClicked
		});

	},
	onChildChanged:function(newState){
	    this.setState({
	      showPublicProfile:this.props.initialClicked
	    });
	    this.props.callbackParent(newState);
	},

	render: function(){
		return(
			<div>
					<ActivitiesList activities={this.state.joinedAct} user={this.props.user}
					initialClicked={this.state.showPublicProfile} callbackParent={this.onChildChanged} showForm={false} /> :
					</div>
			)	

	}


})