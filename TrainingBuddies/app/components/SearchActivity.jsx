var React = require("react");

module.exports = React.createClass({

	render:function(){
		return (
			<form className ="form">
				<div className="form-group">
					<label className="control-label" htmlFor="name">Search activity:</label>
					<input type="text" className="form-control" id="name" name="name" 
					 placeholder="Find activity" />
				</div>
			</form>


			)
	}
})