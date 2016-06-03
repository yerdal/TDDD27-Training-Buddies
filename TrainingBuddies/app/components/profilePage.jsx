var React = require('react');
var UserActivities = require('./UserActivities.jsx');
var ActivitiesStore = require('../stores/activitiesStore');
var JoinedActivities = require('./JoinedActivities.jsx');
var PublicProfile = require("./PublicProfile.jsx");
// The profile page containing user info, participated activites list and user activites list.
// If user has clicked on a name, showPublicProfile == true --> render profile.
module.exports = React.createClass({

	getInitialState: function(){

		return{
			user:this.props.user,
			activities: [], 
			usrActivities: [],
			joinedActivites: [],
			showPublicProfile:{show:false, owner:[]}
			};

	},

	// listens for changes in store
	componentDidMount: function(){
		ActivitiesStore.onChange(this.getActivitiesCallback);
	},

	getActivitiesCallback:function(theActivities){
		this.setState({activities: theActivities});
		this.filterByUser();
		this.joinedFilter();
	},

	filterByUser:function(){
		var userAct = [];

		for(var i = 0; i < this.state.activities.length; i++){
			if (this.state.user.token == this.state.activities[i].owner.token){
				userAct.push(this.state.activities[i]);
			}
		}
		this.setState({
			usrActivities:userAct
		});
	},
	joinedFilter:function(){
		var joinedAct = [];

		for(var i = 0; i < this.state.activities.length; i++){
			for(var j = 0; j < this.state.activities[i].participants.length; j++){
				if((this.state.user.token == this.state.activities[i].participants[j].token) && 
					(this.state.user.token != this.state.activities[i].owner.token)){
					joinedAct.push(this.state.activities[i]);
				}	
			}
		}
		this.setState({
			joinedActivites:joinedAct
		});

	},
	onChildChanged:function(newState){
		this.setState({
		  showPublicProfile:newState
		});
	},

	render: function(){

		return(
			<div>
			{!this.state.showPublicProfile.show ?
				<div className="row">
					<div className="col-md-4">
						<div id="infoBox">
						<img className="img-circle img-responsive" src={this.state.user.picture} />
							<h2> Name: {this.state.user.name} {this.state.user.lastname}</h2>
							<h4> City: {this.state.user.city}, {this.state.user.country} </h4>
							<h5> Age: {this.state.user.age}</h5>
						</div>
					</div>
					<div>
						<h4>Your activities:</h4>
						<UserActivities usrActivities={this.state.usrActivities} user={this.state.user}/>
					</div>
					<div>
						<h4>Participated activities: </h4>
						<JoinedActivities joinedActivities={this.state.joinedActivites} user={this.state.user}
						initialClicked={this.state.showPublicProfile} callbackParent={this.onChildChanged} />
					</div>
				</div>
			: <PublicProfile  profile={this.state.showPublicProfile.owner} /> }
			</div>


		)
	}
})
