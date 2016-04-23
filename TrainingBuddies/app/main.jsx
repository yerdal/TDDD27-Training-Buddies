var React = require("react");
var ReactDOM = require("react-dom");
var ActivityPage = require("./activityPage.jsx");


var MainPage = React.createClass({

    getInitialState: function(){

    	return{showComponent:false};
    },

    componentDidMount: function(){
    	//this._onButtonClick();
    	
    },
    _onButtonClick:function() {
        this.setState({
          showComponent: true,
        });
      },

    render: function() {
        return (
     	    <div className="act">
      		    <button className="btn" onClick={this._onButtonClick}>Activities</button>
      		    {this.state.showComponent ?
      		               <ActivityPage /> :
      		               null
      		            }
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
 