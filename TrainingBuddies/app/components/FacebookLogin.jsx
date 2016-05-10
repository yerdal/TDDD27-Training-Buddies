var React = require("react");

module.exports = React.createClass({

    componentWillUnmount:function(){
        console.log("tjohej");

    },

    render:function(){
        return(

            <div id="loginSquare"> 
                <h2>Please login with Facebook</h2>
                <div id='social-login-button-facebook'>
                    <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
                </div>
                <div id="status">
              </div>
            </div>
     
    )
  }
});
