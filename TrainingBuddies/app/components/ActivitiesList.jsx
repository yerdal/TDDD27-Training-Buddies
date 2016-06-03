var React = require("react");
var ActivityInfo = require("./ActivityInfo.jsx")
var AddActivity = require("./AddActivity.jsx");
/* The list with activities and also the Add activity part with the input fields.
showForm determines whether we should show the add activity form.
showPublicProfile will be true if the user has clicked on a name in the activites list,
which means we should display the profile of that user. */

module.exports = React.createClass({

    getInitialState:function(){
        
        return({
            showForm:true,
            showPublicProfile:this.props.initialClicked
        });
    },

    componentDidMount:function(){
      this.setState({
        showForm:true,
        showPublicProfile:this.props.initialClicked
      });

  },
  // receives data from activityInfo. If a user has clicked on a name, should show profile page.
  onChildChanged:function(newState){
      this.setState({
        showPublicProfile:this.props.initialClicked
      });
      this.props.callbackParent(newState);
  },

   render:function(){
    // Can't understand why I have to set these variables for it to work...weird.
        var us = this.props.user;
        var show = this.state.showPublicProfile;
        var callback = this.onChildChanged;
       return(
          <div>
              <div>
                    {this.props.showForm ?
                      <AddActivity user={this.props.user}/> :
                      null
                    }
                <div>
                  <div id="activites" className="col-md-4">
                    {
                        this.props.activities.map(function(s,index){
                            return(
                                <ActivityInfo info={s} key={"activity"+index} user={us} initialClicked={show} callbackParent={callback}  />
                            )         
                        })

                    }
                  </div>
                </div>
           </div>
         
           </div>
       )
   } 
});