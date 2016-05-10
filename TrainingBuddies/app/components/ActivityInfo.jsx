var React = require("react");
var actions = require("../actions/ActivityActions");

var ActivityInfo = React.createClass({

    getInitialState:function(){
           for (var i = 0; i < this.props.info.participants.length; i++)
           {
               // already joined
               if (this.props.user[0] == this.props.info.participants[i][0])
               {
                   return{
                       ableToJoin:false
                   };
               }
           }
       
       return{
           ableToJoin:true
       };
    },

    componentWillReceiveProps:function(nextProps){
          this.setState({
              ableToJoin:true
          });
        if ((nextProps.info.owner[0] == nextProps.user[0]))
        {
            this.setState({
                ableToJoin:false
            });
            
        }
        else
        {
            for (var i = 0; i < nextProps.info.participants.length; i++)
            {
                // already joined
                if (nextProps.user[0] == nextProps.info.participants[i][0])
                {
                    this.setState({
                        ableToJoin:false
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
        actions.deleteActivity(this.props.info);
        this.props.info.participants.push(this.props.user);
        actions.addActivity(this.props.info);
    },

    render:function(){
        console.log(this.props.info);
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
                                    <button className="btn" onClick ={this.joinActivity} type="submit">Join activity</button>  :
                                    null
                                 }
                    </div>
                </div>
        )
    }
})

module.exports = ActivityInfo;