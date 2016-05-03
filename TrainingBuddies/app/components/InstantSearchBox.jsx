var React = require("react");
var SearchActivity = require("./SearchActivity.jsx");
var ActivitiesList = require("./ActivitiesList.jsx");
module.exports = React.createClass({

	getInitialState:function(){
		console.log("hej");
		console.log(this.props.activities);
		return {
			query:"",
			filteredData:this.props.activities
		};

	},
	
	search:function(queryText){
		//console.log("tju" this.props.filteredData);
		//console.log("queryText", queryText);
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
				<ActivitiesList activities={this.state.filteredData} />
			</div>
			)

	}

})
