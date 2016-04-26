var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./activityPage.jsx");
var FacebookLogin = require("./components/FacebookLogin.jsx");
var Profile = require("./components/Profile.jsx");


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
    _onProfileClick:function() {
      this.setState({
        showProfilePage: true,
        showActivityPage: false,
      });
      //console.log("ProfilePageStatus", this.state.showProfilePage);
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
             <FacebookLogin />
      		</div>

    	);
  	}
});

ReactDOM.render(
	
  		<MainPage />,
  document.getElementById('container-fluid')
);
 