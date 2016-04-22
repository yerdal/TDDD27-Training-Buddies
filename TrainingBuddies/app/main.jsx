var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./activityPage.jsx");


var MainPage = React.createClass({
    update: function(){

    },

    getInitialState: function(){
    	return{clicked: false};
    },

    componentDidMount: function(){

    },

    render: function() {
        return (
     	    <div className="act">
      		    <button className="btn" type="submit">Activities</button>
          		<ActivityPage/>
      		</div>
    	);
  	}
});

ReactDOM.render(
	<div className="act">
  		<MainPage />
  </div>,
  document.getElementById('container')
);
 