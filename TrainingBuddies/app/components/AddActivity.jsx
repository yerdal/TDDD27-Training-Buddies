var React = require("react");

var actions = require("../actions/ActivityActions");

module.exports = React.createClass({
	getInitialState:function(){
		return {
			name:"",
			location:"",
			description:"",
			level: ""

		}
	},

	addActivity:function(e){
		e.preventDefault();
		actions.addActivity(this.state);
	},

	handleInputChange:function(e){
		e.preventDefault();
		var name = e.target.name;
		var state = this.state;
		state[name] = e.target.value;
		this.setState(state);
	},

	render:function(){
		console.log("state.level", this.state.level);
		return (
			<form className="form" onSubmit={this.addActivity}>
				<div className="form-group">
					<label className="control-label" htmlFor="name">Activity:</label>
					<input type="text" className="form-control" id="name" name="name" 
					value={this.state.name} onChange={this.handleInputChange} placeholder="Activity" />
				</div>
				<div className="form-group">
					<label className="control-label" htmlFor="location">Location</label>
					<input type="text" className="form-control" id="location" name="location"
					value={this.state.location} onChange={this.handleInputChange} placeholder="Location" />
				</div> 
				<div className="form-group">
					<label className="control-label" htmlFor="description">Description:</label>
					<input type="text" className="form-control" id="description" name="description"
					value={this.state.address} onChange={this.handleInputChange} placeholder="Description" />
				</div>
				<div className="form-group">
					<label className="control-label" htmlFor="level"> Choose level:</label>
					<select className="selectpicker">
				  		<option value={this.state.level}>Beginner</option>
				  		<option>Intermediate</option>
				  		<option>Advanced</option>
					</select>

				</div>


				<div className="form-group">
					<button className="btn" type="submit">Add Activity</button>
				</div>
			</form>
			
		)
	}
})