var React = require('react');
var UserActivities = require('./UserActivities.jsx');
var ActivitiesStore = require('../stores/activitiesStore');
var JoinedActivities = require('./JoinedActivities.jsx');

module.exports = React.createClass({

	getInitialState: function(){

		return{
			user:this.props.user,
			activities: [], 
			usrActivities: [],
			joinedActivites: []
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
		//console.log("UserActivites", this.state.activities[0].owner);
	},

	filterByUser:function(){
		var userAct = [];
		//console.log("BeforeFilter", this.state.activities);
		//console.log("profilePage",this.state.activities[0].participants[0][1]);

		for(var i = 0; i < this.state.activities.length; i++){
			if (this.state.user[0] == this.state.activities[i].owner[0]){
				userAct.push(this.state.activities[i]);
			}
		}
		//console.log("UserAct array",userAct);
		this.setState({
			usrActivities:userAct
		});
		//console.log("Original act", this.state.activities);
		//console.log("AfterFilter", this.state.usrActivities.owner);
	},
	joinedFilter:function(){
		var joinedAct = [];

		for(var i = 0; i < this.state.activities.length; i++){
			if(this.state.user[0] == this.state.activities[i].participants[0][0]){
				joinedAct.push(this.state.activities[i]);
			}
		}
		this.setState({
			joinedActivites:joinedAct
		});
		//console.log("joinedActivites", joinedAct);
	},

	render: function(){
		/* 
		0:ID, 1:Firstname , 2:Lastname , 3:Email
		4:Profile picture , 5:City , 6:Country, 7:Age
		*/
		//console.log("Participants", this.state.joinedActivites);
		return(

			<div className="row">
				<div className="col-md-4">
					<img className="img-circle img-responsive" src={this.state.user[4]} />
					<div id="infoBox">
						<h2> Name: {this.state.user[1]} {this.state.user[2]}</h2>
						<h4> City: {this.state.user[5]}, {this.state.user[6]} </h4>
						<h5> Age: {this.state.user[7]}</h5>
					</div>
				</div>
				<div>
					<h4>Your activities:</h4>
					<UserActivities usrActivities={this.state.usrActivities} user={this.state.user}/>
					<h4>Participated activities: </h4>
					<JoinedActivities joinedActivities={this.state.joinedActivites} user={this.state.user} />
				</div>
			</div>


		)
	}
})
