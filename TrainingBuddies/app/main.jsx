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
     	    <div className="wrapper">
       	    <div className="menu">
  	     	    <ul>
  	     	    	<li>
  	     	    		<a className="homeBtn">Home</a>
  	     	    	</li>
  	     	    	<li>
  	      		    	<a className="activitiesBtn" onClick={this._onButtonClick}>
                      Activities</a>
  	      		    </li>
  	      		    <li>
  	      		     <a className="aboutBtn">About</a>
  	      		     </li>
                   <li>
                      <a className="profileBtn" onClick={this._onProfileClick}>Profile</a>
                   </li>
  	      		</ul>
        		</div>
          {this.state.showActivityPage ? <ActivityPage /> : null}
          {this.state.showActivityPage ? null : <FacebookLogin />}
          {this.state.showProfilePage ? <Profile/> : null}
          </div>

    	);
  	}
});

ReactDOM.render(
	
  		<MainPage />,
  document.getElementById('container-fluid')
);
 