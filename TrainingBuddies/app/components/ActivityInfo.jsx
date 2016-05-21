var React = require("react");
var actions = require("../actions/ActivityActions");
var $ = require("jquery");
var ProfilePage = require("./PublicProfile.jsx");
var ActivityInfo = React.createClass({

    getInitialState:function(){
           for (var i = 0; i < this.props.info.participants.length; i++){
                // is owner. should not be able to join, but delete.
               if (this.props.user[0] == this.props.info.owner[0]){
                  return{
                    ableToJoin:false,
                    ableToDelete:true,
                    showProfile: this.props.initialClicked
                  }
               }
               // already joined

               else if (this.props.user[0] == this.props.info.participants[i][0]){
                   return{
                       ableToJoin:false,
                       ableToDelete:false,
                       showProfile:this.props.initialClicked
                   };
               }
               else if(this.props.info.participants.length == this.props.info.numPart){ 

                   return{ableToJoin:false,
                        ableToDelete:false,
                        showProfile:this.props.initialClicked
                    };       
                }
           }

       return{
           ableToJoin:true,
           ableToDelete:false,
           showProfile:this.props.initialClicked
       };
    },

    componentWillReceiveProps:function(nextProps){

          this.setState({
              ableToJoin:true,
              ableToDelete:false,
              showProfile: false
          });
        if ((nextProps.info.owner[0] == nextProps.user[0])){

            this.setState({
                ableToJoin:false,
                ableToDelete:true,
                showProfile: false
            });
            
        }
        else if (nextProps.info.participants.length == nextProps.info.numPart){
          this.setState({
            ableToJoin:false,
            ableToDelete:false,
            showProfile:false
          });
        }
        else {
            for (var i = 0; i < nextProps.info.participants.length; i++){
                // already joined
                if (nextProps.user[0] == nextProps.info.participants[i][0])
                {
                    this.setState({
                        ableToJoin:false,
                        ableToDelete: false,
                        showProfile: false
                    });
                }
            }
        }


    },

    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },

    joinActivity:function(e){
        /* TODO 
         * increase numPart when someone has joined
         * Remove join button when participants are full.
        */
        // just delete and then add a new activity with the new participant. 
        //might not be the most efficient solution.
        e.preventDefault();

        var modifiedActivity = $.extend(true, {}, this.props.info);
        modifiedActivity.participants.push(this.props.user);
        actions.deleteActivity(this.props.info);
        actions.addActivity(modifiedActivity);

    },
    leaveActivity:function(e){
        e.preventDefault();
        var modifiedActivity = $.extend(true, {}, this.props.info);
        // remove participant
        for (var i = 0; i < this.props.info.participants.length; i++){
            if (this.props.user[0] == this.props.info.participants[i][0]){
                modifiedActivity.participants.splice(i, 1);
            }
        }
        actions.deleteActivity(this.props.info);
        actions.addActivity(modifiedActivity);
    },
    onNameClick:function(){
        //console.log("HE PÅ DIG");
        this.setState({
            showProfile:true
        })
        this.props.callbackParent({
            show:true,
            owner: this.props.info.owner});
    },

    participantCount:function(){
      if(this.props.info.numPart == this.props.info.participants.length){
          /*this.setState({
            ableToJoin:false
          })*/
          return "Activity Full!";
      }

      return this.props.info.participants.length + ' of ' + this.props.info.numPart; 

    },

    render:function(){
        return(
            <div className="activities">
                <div className="panel panel-default">
                    
                    <div className="panel-heading">

                      {this.state.ableToDelete ?
                                  <span className="pull-right text-uppercase delete-button change-cursor" onClick={this.deleteActivity}>&times;</span> :
                                  null
                                }
                         <h4>{this.props.info.name} with <a className="change-cursor" clicked={this.state.showProfile} onClick={this.onNameClick}> {this.props.info.owner[1]} {this.props.info.owner[2]} </a></h4> 
                         <h5>{this.props.info.location}</h5>
                         <h5>{this.props.info.time}, {this.props.info.date}</h5>
                                               
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>
                    <div id="levelFooter" className="panel-footer"> Level: {this.props.info.level}<br/>
                      Participants: {this.participantCount()}
                    </div>
                        <div className="join">
                        {this.state.ableToJoin && this.state.ableToDelete ?
                            null : 
                            null
                        }
                        {this.state.ableToJoin && !this.state.ableToDelete ?
                            <button className="btn" onClick ={this.joinActivity} type="submit">Join activity</button> :
                            null
                        }
                        {!this.state.ableToJoin && this.state.ableToDelete ?
                            null :
                            null

                        }
                        {!this.state.ableToJoin && !this.state.ableToDelete ? 
                            <button className="btn" onClick ={this.leaveActivity} type="submit">Leave activity</button> :
                            null
                        }


                    </div>
                </div>
            </div>
        )
    }
})

module.exports = ActivityInfo;