var dispatcher = require("../dispatcher");
var activityService = require("../services/activityService");



function ActivityStore() {
    var listeners = [];

    function onChange(listener) {

        getActivities(listener);
        listeners.push(listener);
    }

    function getActivities(cb) {
        activityService.getActivities().then(function(res){
            // cb = getSchoolsCallback as in main.jsx
            cb(res);
        });
    }

    function addActivity(activity) {
        activityService.addActivity(activity).then(function(res){
            triggerListeners();
        })
    }

    function deleteActivity(activity) {
        activityService.deleteActivity(activity).then(function(res){
            triggerListeners();
        });
    }

    function triggerListeners() {
        getActivities(function(res){
            listeners.forEach(function (listener) {
                listener(res);
            });
        });

    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "activity") {
            switch (split[1]) {
                case "addActivity":
                    addActivity(payload.activity);
                    break;
                case "deleteActivity":
                    deleteActivity(payload.activity);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ActivityStore();