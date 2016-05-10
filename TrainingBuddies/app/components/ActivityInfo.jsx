var React = require("react");
var actions = require("../actions/ActivityActions");
var JoinActivity = require("./JoinActivity.jsx");

var ActivityInfo = React.createClass({

    getInitialState:function(){
        console.log("HEJ INITIAL");


           for (var i = 0; i < this.props.info.participants.length; i++)
           {
               // already joined
               if (this.props.userToken == this.props.info.participants[i][0])
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
        console.log(nextProps.info);
          this.setState({
              ableToJoin:true
          });
        if ((nextProps.info.owner[0] == nextProps.userToken))
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
                if (nextProps.userToken == nextProps.info.participants[i][0])
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


    render:function(){
        console.log("I render: ");
        console.log(this.state.ableToJoin);
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
                                    <JoinActivity activities ={this.props.info} /> :
                                    null
                                 }
                    </div>
                </div>
        )
    }
})

module.exports = ActivityInfo;