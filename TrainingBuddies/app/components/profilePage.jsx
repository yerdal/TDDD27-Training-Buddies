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
	},

	filterByUser:function(){
		var userAct = [];

		for(var i = 0; i < this.state.activities.length; i++){
			if (this.state.user[0] == this.state.activities[i].owner[0]){
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

				if((this.state.user[0] == this.state.activities[i].participants[j][0]) && 
					(this.state.user[0] != this.state.activities[i].owner[0])){
					joinedAct.push(this.state.activities[i]);
				}	
			}
		}
		this.setState({
			joinedActivites:joinedAct
		});

	},

	render: function(){
		/* 
		0:ID, 1:Firstname , 2:Lastname , 3:Email
		4:Profile picture , 5:City , 6:Country, 7:Age
		*/
		return(

			<div className="row">
				<div className="col-md-4">
					<div id="infoBox">
					<img className="img-circle img-responsive" src={this.state.user[4]} />
						<h2> Name: {this.state.user[1]} {this.state.user[2]}</h2>
						<h4> City: {this.state.user[5]}, {this.state.user[6]} </h4>
						<h5> Age: {this.state.user[7]}</h5>
					</div>
				</div>
				<div>
					<h4>Your activities:</h4>
					<UserActivities usrActivities={this.state.usrActivities} user={this.state.user}/>
				</div>
				<div>
					<h4>Participated activities: </h4>
					<JoinedActivities joinedActivities={this.state.joinedActivites} user={this.state.user} />
				</div>
			</div>


		)
	}
})
