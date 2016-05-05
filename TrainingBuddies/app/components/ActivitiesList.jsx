var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({

    getInitialState:function(){
        var name = this.props.user[1] + " " + this.props.user[2];
        return({
            userToken:this.props.user[0],
            userName:name
        });
    },

   render:function(){
    /* Have no idea why I cant just set usertoken and username directly as state in render*/
        var token = this.state.userToken;
        var name = this.state.userName;
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddActivity user={this.props.user}/>
                </div>
                <div>
                  <div className="col-md-6"> Activities </div>
                  <div className="col-md-6">
                    {

                        this.props.activities.map(function(s,index){
                            return(
                                <ActivityInfo info={s} key={"activity"+index} userToken={token} userName={name}  />
                            )         
                        })

                    }
                    
                  </div>
                  </div>
           </div>
       )
   } 
});