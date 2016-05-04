var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

	getInitialState: function(){
		return{user:this.props.user}

	},

	render: function(){
		console.log("user", this.state.user);
		return(

			<div>
				<h2> {this.state.user[1]} {this.state.user[2]}</h2>
			</div>
		)
	}
})
