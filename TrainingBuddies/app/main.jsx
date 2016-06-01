var React = require("react");
var ReactDOM = require("react-dom");
var FacebookLogin = require("./components/FacebookLogin.jsx");
var Router = require("react-router");
var MainPage = React.createClass({

    render: function() {
        return (
             <div className="row">
                <div className="col-lg-6 col-lg-offset-3 text-center"> 
                  <h1 id="mainH1">Training Buddies</h1>
                  <FacebookLogin />
                </div>
            </div>
    	);
  	}
});

ReactDOM.render(
	
  		<MainPage />,
  document.getElementById('container-fluid')
);
 
 module.exports = MainPage;