var React = require("react");
var SearchActivity = require("./SearchActivity.jsx");
var ActivitiesList = require("./ActivitiesList.jsx");
var PublicProfile = require("./PublicProfile.jsx");
module.exports = React.createClass({

	getInitialState:function(){
		return {
			query:"",
			filteredData:this.props.activities,
			showPublicProfile:{show:false, owner:[]}
		};

	},

	componentWillReceiveProps:function(nextProps){
		this.setState({
			filteredData:nextProps.activities,
		});

	},
	search:function(queryText){

		if(queryText == 0){
			console.log("queryText is empty");
		}
		var queryRes = [];
		this.setState({
			query:queryText,
			filteredData:queryRes
		});
		this.props.activities.forEach(function(activity){
			if (activity.name.toLowerCase().indexOf(queryText) != -1 ||
				 activity.location.toLowerCase().indexOf(queryText) != -1){
				queryRes.push(activity);
			}
		});
		
	},
	onChildChanged:function(newState){
		this.setState({
		  showPublicProfile:newState
		});
		console.log(newState);
	},

	render:function(){
		console.log(this.state.showPublicProfile.show);
			return(
			<div>
				{!this.state.showPublicProfile.show ?
					<div>
						<h2> Search activity </h2>
						<SearchActivity query={this.state.query} search={this.search} />
						<ActivitiesList activities={this.state.filteredData} user={this.props.user} initialClicked={this.state.showPublicProfile} callbackParent={this.onChildChanged} showForm={true} />
					</div>
					: <PublicProfile  profile={this.state.showPublicProfile.owner} />
				}
			</div>
			)

	}

})
