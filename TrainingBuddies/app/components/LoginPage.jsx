var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./ActivityPage.jsx");
var ProfilePage = require("./ProfilePage.jsx");
var AboutPage = require("./AboutPage.jsx");
/* Shows profile page on default. Then click at activities or about button to show them. */

var LoginPage = React.createClass({

    getInitialState: function(){
        var user = document.getElementById('user').getAttribute('data-value');
        var userObj = JSON.parse(user);
        return{
          showActivityPage:false,
          user:userObj,
          showProfilePage:true,
          showAboutPage: false
        };

    },

    _onActivitiesClick:function() {
        this.setState({
          showActivityPage: true,
          showProfilePage: false,
          showAboutPage: false
        });
      },
    onHomeClick:function(){
      this.setState({
        showActivityPage: false,
        showProfilePage: true,
        showAboutPage: false
      });
    },
    onAboutClick:function(){
      this.setState({
        showActivityPage: false,
        showProfilePage: false,
        showAboutPage: true
      })
    },

    render: function() {
        return (
            
                <div className="page greyBack">
                    <div className="menu">
                        <ul>
                            <li>
                                <a className="homeBtn headerButton" onClick={this.onHomeClick}>Home</a>
                            </li>
                            <li>
                                <a className="activitiesBtn headerButton" onClick={this._onActivitiesClick}>Activities</a>
                            </li>
                            <li>
                             <a className="aboutBtn headerButton" onClick={this.onAboutClick}>About</a>
                             </li>
                             <li>
                                <a href="/logout " className="headerButton">Logout </a>
                            </li>
                        </ul>
                    </div>
                    <div className="activitypage">
                      {this.state.showActivityPage ?
                                 <ActivityPage user={this.state.user} /> :
                                 null
                              }
                    </div>
                    <div className="profilepage">
                    {this.state.showProfilePage ? 
                               <ProfilePage user={this.state.user} /> :
                               null
                              }

                    </div>     
                    <div id="aboutPage">
                      {this.state.showAboutPage ? 
                        <AboutPage/> :
                        null
                        }
                    </div>     

                </div>
          

        );
    }
})

module.exports = LoginPage;

ReactDOM.render(
        <LoginPage />,
  document.getElementById('container-fluid')
);