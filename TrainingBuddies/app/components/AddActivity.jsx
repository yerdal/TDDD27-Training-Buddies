var React = require("react");
var ReactDOM = require("react-dom");
var actions = require("../actions/ActivityActions");

module.exports = React.createClass({
	getInitialState:function(){
		return {
			name:"",
			location:"",
			description:"",
			level:"",
			owner:{},
			date:"",
			time:"",
			postDate:"",
			numPart:"",
			participants:[]
		}
	},

	currentDate:function(){
		var d = new Date(),
		year = d.getFullYear(),
		month = d.getUTCMonth()+1,
		day = d.getUTCDate();

		if(month<10) {
			var today = year + '-' + '0' + month + '-' + day;
			return today;
		}
		else {
			var today = year + '-' + month + '-' + day;
			return today; 
		}
	},

	currentTime:function(){
		var d = new Date(),
		minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
		hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();

		var time = hours + ':' + minutes;
		var chosenDate = this.state.date,
		splitDate = chosenDate.split("-"),
		chosenYear = splitDate[0],
		chosenMonth = splitDate[1],
		chosenDay = splitDate[2];

		var actDate = this.currentDate().split("-"),
		actYear = actDate[0], 
		actMonth = actDate[1],
		actDay = actDate[2];
		
		if(chosenDay == actDay){
			if(chosenMonth == actMonth){
				if(chosenYear == actYear){
					return time;
				}
			}	
		}
		return "";
	},

	addActivity:function(e) {		
		e.preventDefault();
		actions.addActivity(this.state);
		this.setState({
			name:"",
		 	location:""
		 });
		ReactDOM.findDOMNode(this.refs["descriptionInput"]).value = "";
	},
	// handles input change for all input text fields
	handleInputChange:function(e) {
		e.preventDefault();
		var name = e.target.name;
		var state = this.state;
		state[name] = e.target.value;
		this.setState(state);
	},
	selectLevel:function(e) {

		this.setState({level: e.target.value});
	},
	setOwner:function() {
		var newParticipants = [];
 		newParticipants.push(this.props.user);
		this.setState({
			owner: this.props.user, 
			participants:newParticipants
		});
	},

	render:function() {
		return (
			<div id="addActivity" className="col-md-4">
				<form className="form" onSubmit={this.addActivity} ref="formRef">
					<div className="form-group">
						<label className="control-label" htmlFor="name">Activity:</label>
						<input type="text" className="form-control" ref="nameInput" id="name" name="name" 
						value={this.state.name} onChange={this.handleInputChange} placeholder="Activity" />
					</div>

					<div className="form-group">
						<label className="control-label" htmlFor="location">Location</label>
						<input type="text" className="form-control" ref="locationInput" id="location" name="location"
						value={this.state.location} onChange={this.handleInputChange} placeholder="Location" />
					</div> 

					<div className="form-group">
						<label className="control-label" htmlFor="description">Description:</label>
						<input type="text" className="form-control" ref="descriptionInput" id="description" name="description"
						value={this.state.address} onChange={this.handleInputChange} placeholder="Description" />
					</div>

					<div className="form-group">
						<label className="control-label" htmlFor="dateHtml">Date</label>
						<input type="date" name="date" min={this.currentDate()} value={this.state.date} 
						onChange={this.handleInputChange}/>
						<label className="control-label" htmlFor="timeHtml">Time</label>
						<input type="time" name="time" min={this.currentTime()} value={this.state.time}
						onChange={this.handleInputChange}/>
					</div>

					<div className="form-group" htmlFor="numPart">
						<label className="control-label" htmlFor="numPart">Max number of participants:</label>
						<input type="number" name="numPart" min="1" value={this.state.numPart} 
						onChange={this.handleInputChange}/>
					</div>

					<div className="form-group" htmlFor="level">
						<label className="control-label" htmlFor="level"> Choose level:</label>

						<select value={this.state.level} onChange={this.selectLevel}>
					  		<option value="Beginner">Beginner</option>
					  		<option value="Intermediate">Intermediate</option>
					  		<option value="Advanced">Advanced</option>
						</select>
					</div>

					<div className="form-group">
						<button className="btn btn-primary" type="submit" onClick={this.setOwner}>Add Activity</button>
					</div>
				</form>
			</div>
			
		)
	}
})