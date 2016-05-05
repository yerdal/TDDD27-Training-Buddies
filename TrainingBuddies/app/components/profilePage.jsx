var React = require('react');

module.exports = React.createClass({

	getInitialState: function(){

		return{user:this.props.user}

	},

	render: function(){
		//console.log("User Info", this.state.user);
		var imgSrc = this.state.user[4];
		return(

			<div>
				<h2> {this.state.user[1]} {this.state.user[2]}</h2>
				<h3> {this.state.user[3]} </h3>
				<h4> {this.state.user[5]}, {this.state.user[6]} </h4>
				<h5>{this.state.user[7]}</h5>
				<img src={this.state.user[4]} />
			</div>
		)
	}
})
