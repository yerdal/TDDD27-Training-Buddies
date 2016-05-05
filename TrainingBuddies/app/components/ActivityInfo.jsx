var React = require("react");
var actions = require("../actions/ActivityActions");
var JoinActivity = require("./JoinActivity.jsx");

var ActivityInfo = React.createClass({

    getInitialState:function(){
       if ((this.props.info.owner[0] !== this.props.userToken))
       {
           return({
               ableToJoin:true
           });
       }
       else
       {
           for (var i = 0; i < this.props.info.participants.length; i++)
           {
               // already joined
               if (this.props.userToken == this.props.info.participants[i][0])
               {
                   return({
                       ableToJoin:false
                   });
               }
           }
           return({
               ableToJoin:true
           });
       }
    },
    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },


    render:function(){
        console.log()
        return(
                <div className="panel panel-default">
                    
                    <div className="panel-heading">
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteActivity}>&times;</span>
                         <h4>{this.props.info.name} with {this.props.info.owner[1]} {this.props.info.owner[2]}</h4> 
                         <h5>{this.props.info.location}</h5>
                                               
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>
                    <div id="levelFooter" className="panel-footer">{this.props.info.level}</div>
                     <div className="join">
                         {this.state.ableToJoin ?
                                    <JoinActivity /> :
                                    null
                                 }
                    </div>
                </div>
        )
    }
})

module.exports = ActivityInfo;