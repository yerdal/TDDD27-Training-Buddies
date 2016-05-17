var React = require("react");
var SearchActivity = require("./SearchActivity.jsx");
var ActivitiesList = require("./ActivitiesList.jsx");
module.exports = React.createClass({

	getInitialState:function(){
		return {
			query:"",
			filteredData:this.props.activities
		};

	},

	componentWillReceiveProps:function(nextProps){
		this.setState({
			filteredData:nextProps.activities
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

	render:function(){
			return(
			<div>
				<h2> Search activity </h2>
				<SearchActivity query={this.state.query} search={this.search} />
				<ActivitiesList activities={this.state.filteredData} user={this.props.user} showForm={true} />
			</div>
			)

	}

})
