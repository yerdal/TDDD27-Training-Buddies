var React = require("react");


module.exports = React.createClass({
	componentDidMount:function(){

	},
	render:function(){
		return(
			<div className="row">
				<div className="col-md-4">
					<img className="img-circle img-responsive" src={this.props.profile.picture} />
					<div id="infoBox">
						<h2> Name: {this.props.profile.name} {this.props.profile.lastname}</h2>
						<h4> City: {this.props.profile.city}, {this.props.profile.country} </h4>
						<h5> Age: {this.props.profile.age}</h5>
					</div>
				</div>
			</div>
			)
	}
})