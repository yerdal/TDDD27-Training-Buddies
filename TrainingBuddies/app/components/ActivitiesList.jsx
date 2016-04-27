var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddActivity />
                </div>
                <div>
                  <div className="col-md-6"> Activities </div>
                  <div className="col-md-6">
                    {

                        this.props.activities.map(function(s,index){

                            return(
                                <ActivityInfo info={s} key={"activity"+index} />
                            )         
                        })
                    }
                  </div>
                  </div>
           </div>
       )
   } 
});