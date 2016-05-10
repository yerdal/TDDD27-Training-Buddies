var React = require("react");
//var actions = require("../actions/ActivityActions");

module.exports = React.createClass({

    componentDidMount:function()
    {
    	//console.log(this.props.activities);
    },

    render:function(){

        return(

                <div className="joinBtn">
                    <button className="btn" onClick={this.joinActivity} type="submit">Join activity</button>
                </div>
        )
    }
})