var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./activityPage.jsx");
var FacebookLogin = require("./components/FacebookLogin.jsx");
var Router = require("react-router");


var MainPage = React.createClass({

    getInitialState: function(){

    	return{showActivityPage:false, showProfilePage:false};
    },

    componentDidMount: function(){
    	
    },
    _onButtonClick:function() {
        this.setState({
          showActivityPage: true,
        });
      },

    render: function() {
        return (

     	    <div className="menu">
	     	    <ul>
	     	    	<li>
	     	    		<a className="homeBtn">Home</a>
	     	    	</li>
	     	    	<li>
	      		    	<a className="activitiesBtn" onClick={this._onButtonClick}>Activities</a>

	      		    {this.state.showActivityPage ?
	      		               <ActivityPage /> :
	      		               null
	      		            }
	      		    </li>
	      		    <li>
	      		     <a className="aboutBtn">About</a>
	      		     </li>
	      		</ul>
             <a href="/auth/facebook">Login with Facebook</a>
      		</div>


    	);
  	}
});

ReactDOM.render(
	
  		<MainPage />,
  document.getElementById('container-fluid')
);
 