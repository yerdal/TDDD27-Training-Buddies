var React = require("react");
var actions = require("../actions/ActivityActions");
var JoinActivity = require("./JoinActivity.jsx");

module.exports = React.createClass({

    getInitialState:function()
    {
        return{ableToJoin:true};
    },
    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },
    componentDidMount:function()
    {
        // compare user tokens to see if it's your own activity or not, or if you have already joined.
        // if not, you are able to join, so show join button.
       
        //console.log("Owner " + this.props.info.owner[0]);
        //console.log("Participants" + this.props.info.participants[0][0]);
        if (this.props.info.owner[0] !== this.props.info.participants[0][0]){
            this.setState({
                ableToJoin:true
            });
        }
        else{
            this.setState({
                ableToJoin:false
            });
        }

    },

    render:function(){

        return(
                <div className="panel panel-default">
                    
                    <div className="panel-heading">
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteActivity}>&times;</span>
                         <h4>{this.props.info.name} with {this.props.info.owner[1]} {this.props.info.owner[2]}</h4> 
                         <h5>{this.props.info.location}</h5>
                         <div className="joinBtn">
                             {this.state.ableToJoin ?
                                <JoinActivity user={this.props.user} /> :
                                null
                            }
                        </div>
                                               
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>
                    <div id="levelFooter" className="panel-footer">{this.props.info.level}</div>
                    
                </div>
        )
    }
})