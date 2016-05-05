var React = require("react");
//var actions = require("../actions/ActivityActions");

module.exports = React.createClass({
    
    componentDidMount:function(){
        
    },
    /*joinActivity: function(e){
        e.preventDefault();
        console.log(this.props.info);
        this.props.info.participants=this.props.info.user
        actions.joinActivity(this.props.info);
    },*/
    render:function(){
    
        return(
               <div>
                
                    <button className="btn" type="submit">Join activity</button>
                    
                </div>
        )
    }
})