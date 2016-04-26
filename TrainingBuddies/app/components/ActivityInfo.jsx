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
                        {this.props.info.name} i {this.props.info.location} 
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteActivity}>&times;</span>
                    </div>

                    <div className="panel-body">{this.props.info.description}</div>

                </div>
        )
    }
})