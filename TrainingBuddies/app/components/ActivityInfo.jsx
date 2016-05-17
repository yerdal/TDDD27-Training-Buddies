var React = require("react");
var actions = require("../actions/ActivityActions");
var $ = require("jquery");
var ActivityInfo = React.createClass({

    getInitialState:function(){
           for (var i = 0; i < this.props.info.participants.length; i++){
                // is owner. should not be able to join, but delete.
               if (this.props.user[0] == this.props.info.owner[0]){
                  return{
                    ableToJoin:false,
                    ableToDelete:true
                  }
               }
               // already joined

               else if (this.props.user[0] == this.props.info.participants[i][0]){
                   return{
                       ableToJoin:false,
                       ableToDelete:false
                   };
               }
           }

       return{
           ableToJoin:true,
           ableToDelete:false
       };
    },

    componentWillReceiveProps:function(nextProps){

          this.setState({
              ableToJoin:true,
              ableToDelete:false
          });
        if ((nextProps.info.owner[0] == nextProps.user[0])){

            this.setState({
                ableToJoin:false,
                ableToDelete:true
            });
            
        }
        else{
            for (var i = 0; i < nextProps.info.participants.length; i++)
            {
                // already joined
                if (nextProps.user[0] == nextProps.info.participants[i][0])
                {
                    this.setState({
                        ableToJoin:false,
                        ableToDelete: false
                    });
                }
            }
        }

    },

    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },

    joinActivity:function(e)
    {
        // just delete and then add a new activity with the new participant. 
        //might not be the most efficient solution.
        console.log("join: ");
        console.log(this.props.info);
        var modifiedActivity = $.extend(true, {}, this.props.info);
        console.log("MODIFIED");
        console.log(modifiedActivity);
        modifiedActivity.participants.push(this.props.user);
        actions.deleteActivity(this.props.info);
        actions.addActivity(modifiedActivity);

    },

    render:function(){
        // if able to join (not owner), render join button. Else, render delete button.
        console.log(this.props.info);
        console.log(this.state.ableToJoin);
        return(
                <div className="panel panel-default">
                    
                    <div className="panel-heading">
                      {this.state.ableToDelete ?
                                  <span className="pull-right text-uppercase delete-button" onClick={this.deleteActivity}>&times;</span> :
                                  null
                                }
                         <h4>{this.props.info.name} with {this.props.info.owner[1]} {this.props.info.owner[2]}</h4> 
                         <h5>{this.props.info.location}</h5>
                      
                                               
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>
                    <div id="levelFooter" className="panel-footer">{this.props.info.level}</div>
                     <div className="join">
                         {this.state.ableToJoin ?
                                    <button className="btn" onClick ={this.joinActivity} type="submit">Join activity</button>  :
                                    null
                                 }
                    </div>
                </div>
        )
    }
})

module.exports = ActivityInfo;