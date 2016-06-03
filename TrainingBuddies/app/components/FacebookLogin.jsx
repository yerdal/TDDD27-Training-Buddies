var React = require("react");

module.exports = React.createClass({

    render:function(){
        return(

            <div className="loginSquare">
                <h2>Login with <br/>
                <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span>Facebook</a>
                </h2>                                
            </div>
        )
  }
});
