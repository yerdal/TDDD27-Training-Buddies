var React = require("react");

module.exports = React.createClass({

	search:function(){
		var query = this.refs.searchInput.value;
		this.props.search(query);
	},

	render:function(){
		return (
					<input type="text" ref="searchInput" value={this.props.query} onChange={this.search}
					 placeholder="Find activity" />
			)
	}
})