var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({

    getInitialState:function(){
        
        return({
            showForm:true
        });
    },

    componentDidMount:function(){
      this.setState({
        showForm:true
      });

  },

   render:function(){
    /* Have no idea why I cant just set usertoken and username directly as state in render*/

        var us = this.props.user;
       return(
           <div>
                    {this.props.showForm ?
                      <AddActivity user={this.props.user}/> :
                      null
                    }
                <div>
                  <div id="activites" className="col-md-4">
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