var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");

module.exports = React.createClass({
  getInitialState:function(){
    return({
        showForm:true
        }
      )
  },

  componentDidMount:function(){
    this.setState({
      showForm:true
    });

  },
   render:function(){
    //console.log("List", this.props.activities.participants);
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