var React = require('react');

module.exports = React.createClass({

	render:function(){
		return(
			<div className="row">
   				<div className="col-lg-6 col-lg-offset-3 text-center">
	   				<h1>Training Buddies</h1>
					<p id="aboutP">This is an application made as a project in the the course <br/>
					   TDDD27-Advanced web programming by Einar Sandberg and Yusuf Erdal. <br/>
						The goal of the application is to join other people in activities <br/>
						whom have similiar interests as yourself. <br/>
						It was developed using React, MongoDB, ExpressJS nodeJS <br/>
						and was deployed in Heroku.
					</p>
					</div>
			</div>
			);

	}
})