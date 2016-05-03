var React = require("react");
var actions = require("../actions/ActivityActions");

module.exports = React.createClass({
    deleteActivity: function(e){
        e.preventDefault();
        actions.deleteActivity(this.props.info);
    },
    render:function(){
        return(
                <div className="panel panel-default">
                    
                    <div className="panel-heading">
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteActivity}>&times;</span>
                     <h4>{this.props.info.name}</h4> <h5>{this.props.info.location}</h5>
                        
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>
                    <div id="levelFooter" className="panel-footer">{this.props.info.level}</div>
                </div>
        )
    }
})