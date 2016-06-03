var React = require("react");
var actions = require("../actions/ActivityActions");
var $ = require("jquery");
var ProfilePage = require("./PublicProfile.jsx");
var ActivityInfo = React.createClass({
/* Info about each activity. ableToJoin, ableToDelete, isFull, showProfile are used
to determine what should be rendered.
ableToJoin: Able to join --> you're not the owner and have not previously joined.
ableToDelete: able to delete --> you are the owner and can therefore delete the activity.
isFull: Activity is full, you can't join, only leave, if you're a participant.
*/

    getInitialState:function(){

        var ableToJoin = true;
        var isFull = false;
        var ableToDelete = false;
        if (this.props.user.token == this.props.info.owner.token) {
            ableToJoin = false;
            ableToDelete = true;
        }
        if (this.props.info.participants.length == this.props.info.numPart) {
            isFull = true;
        }
        for (var i = 0; i < this.props.info.participants.length; i++){
            if (this.props.user.token == this.props.info.participants[i].token) {
                ableToJoin = false;
                break;
            }
        }

       return{
           isFull: isFull,
           ableToJoin:ableToJoin,
           ableToDelete:ableToDelete,
           showProfile:this.props.initialClicked
       };
    },

    componentDidMount:function(){
        var ableToJoin = true;
        var isFull = false;
        var ableToDelete = false;
        if (this.props.user.token == this.props.info.owner.token) {
            ableToJoin = false;
            ableToDelete = true;
        }
        if (this.props.info.participants.length == this.props.info.numPart) {
            isFull = true;
        }
        for (var i = 0; i < this.props.info.participants.length; i++) {
            if (this.props.user.token == this.props.info.participants[i].token) {
                ableToJoin = false;
                break;
            }
        }
        this.setState({
            isFull: isFull,
            ableToJoin: ableToJoin,
            ableToDelete: ableToDelete,
            showProfile: false
        })

    },

    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },

    joinActivity:function(e){
        e.preventDefault();
        this.props.info.participants.push(this.props.user);
        actions.editActivity(this.props.info);
        var full;
        if(this.props.info.participants.length == this.props.info.numPart) {
          full = true;
        }
        else {
          full = false;
        }
        this.setState({
          isFull: full,
          ableToJoin: false,
          ableToDelete: false,
          showProfile: false
        })

    },
    leaveActivity:function(e){
        // remove participant
        e.preventDefault();
        for (var i = 0; i < this.props.info.participants.length; i++) {
            if (this.props.user.token == this.props.info.participants[i].token) {
                this.props.info.participants.splice(i, 1);
            }
        }
        actions.editActivity(this.props.info);
        
        this.setState({
          isFull: false,
          ableToJoin: true,
          ableToDelete: false,
          showProfile: false
        })
    },
    onNameClick:function() {
        this.setState({
            showProfile:true
        })
        this.props.callbackParent({
            show:true,
            owner: this.props.info.owner});
    },

    participantCount:function() {
      if(this.props.info.numPart == this.props.info.participants.length){
          return "Activity Full! " + ("(" + this.props.info.numPart + "/" + this.props.info.numPart + ")");
      }

      return ((this.props.info.numPart - this.props.info.participants.length) + " places left "
      + "(" + this.props.info.participants.length + "/" + this.props.info.numPart + ")" );

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
                         <h4>{this.props.info.name} with <a className="change-cursor" clicked={this.state.showProfile} onClick={this.onNameClick}> {this.props.info.owner.name} {this.props.info.owner.lastname} </a></h4> 
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
                        {this.state.ableToJoin && !this.state.ableToDelete && !this.state.isFull ?
                            <button className="btn" onClick ={this.joinActivity} type="submit">Join activity</button> :
                            null
                        }
                        {!this.state.ableToJoin && this.state.ableToDelete ?
                            null :
                            null

                        }
                        {!this.state.ableToJoin && !this.state.ableToDelete && !this.state.isFull ? 
                            <button className="btn" onClick ={this.leaveActivity} type="submit">Leave activity</button> :
                            null
                        }
                        {!this.state.ableToJoin && !this.state.ableToDelete && this.state.isFull ?
                          <button className="btn" onClick ={this.leaveActivity} type="submit">Leave activity</button> :
                          null
                        }
                        {this.state.ableToJoin && !this.state.ableToDelete && this.state.isFull ? 
                          null:
                          null
                        }

                    </div>
                </div>
            </div>
        )
    }
})

module.exports = ActivityInfo;