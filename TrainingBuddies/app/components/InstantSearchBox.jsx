var React = require("react");
var SearchActivity = require("./SearchActivity.jsx");
var ActivitiesList = require("./ActivitiesList.jsx");
module.exports = React.createClass({

	getInitialState:function(){
		console.log(this.props.activities);
		var data = this.props.activities;
		return {
			query:"",
			filteredData:this.props.activities
		};
	},

	search:function(queryText){
		var queryRes = [];
		this.props.activities.forEach(function(activity){
			if (activity.name.toLowerCase().indexOf(queryText) != -1){
				queryRes.push(activity);
			}
		});
		this.setState({
			query:queryText,
			filteredData:queryRes
		})
	},

	render:function(){
		console.log(this.state.filteredData);
		console.log(this.props.activities);

		/*if (this.state.filteredData.length == 0)
		{*/
			return(
			<div>
				<h2> Search activity </h2>
				<SearchActivity query={this.state.query} search={this.search} />
				<ActivitiesList activities={this.state.filteredData} />
			</div>
			)

	}

})
