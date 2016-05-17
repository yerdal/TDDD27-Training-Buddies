var React = require("react");


module.exports = React.createClass({
	componentDidMount:function(){
		console.log(this.props.profile);

	},
	render:function(){
		return(
			<div className="row">
				<div className="col-md-4">
					<img className="img-circle img-responsive" src={this.props.profile[4]} />
					<div id="infoBox">
						<h2> Name: {this.props.profile[1]} {this.props.profile[2]}</h2>
						<h4> City: {this.props.profile[5]}, {this.props.profile[6]} </h4>
						<h5> Age: {this.props.profile[7]}</h5>
					</div>
				</div>
			</div>
			)
	}
})