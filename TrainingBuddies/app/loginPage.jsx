var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./activityPage.jsx");
//var FacebookLogin = require("./components/FacebookLogin.jsx");
var Router = require("react-router");

var LoginPage = React.createClass({

    getInitialState: function(){
        //console.log(this.props.user);
        var val = document.getElementById('usertoken').getAttribute('data-value');
        var name = document.getElementById('name').getAttribute('data-value');
        return{showActivityPage:false, user:name};
    },

    componentDidMount: function(){
        //console.log(this.props.user);
        
    },
    _onButtonClick:function() {
        this.setState({
          showActivityPage: true,
        });
      },

    render: function() {
        return (
            
                <div className ="page">
                    <p>Welcome {this.state.user}</p>
                    <div className="menu">
                        <ul>
                            <li>
                                <a className="homeBtn">Home</a>
                            </li>
                            <li>
                                <a className="activitiesBtn" onClick={this._onButtonClick}>Activities</a>
                            </li>
                            <li>
                             <a className="aboutBtn">About</a>
                             </li>
                             <li>
                                <a href="/logout" class="btn btn-primary">Logout </a>
                            </li>
                        </ul>
                    </div>
                    <div className="activitypage">
                      {this.state.showActivityPage ?
                                 <ActivityPage user={this.state.user} /> :
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