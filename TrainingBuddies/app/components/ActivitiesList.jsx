var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({


    getInitialState:function(){
        var name = this.props.user[1] + " " + this.props.user[2];
        return({
            userToken:this.props.user[0],
            userName:name, 
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
        var token = this.state.userToken;
        var name = this.state.userName;

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