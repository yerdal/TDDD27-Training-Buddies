var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({

   render:function(){
    /* Have no idea why I cant just set usertoken and username directly as state in render*/
        var us = this.props.user;
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
                                <ActivityInfo info={s} key={"activity"+index} user={us}  />
                            )         
                        })

                    }
                    
                  </div>
                  </div>
           </div>
       )
   } 
});