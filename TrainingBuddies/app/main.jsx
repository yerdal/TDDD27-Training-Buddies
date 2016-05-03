var React = require("react");
var ReactDOM = require("react-dom");
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

            <div className ="page">

                <div className fbBox>
                    {
                        <FacebookLogin />
                    }
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