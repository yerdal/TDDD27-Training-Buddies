var mongoose = require("mongoose");
var Activity = require("../data/activity");
var _ = require("underscore");

var router = require("express").Router();
router.route("/activities/:id?").get(getActivities).post(addActivity).delete(deleteActivity).put(editActivity);

function getActivities(req, res) {
    Activity.find(function (err, activities) {
        if (err)
            res.send(err);
        else
            res.json(activities);
    });
}

function addActivity(req, res) {
    var activity = new Activity(_.extend({}, req.body));
    activity.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(activity);
    });
}

function deleteActivity(req, res) {
    var id = req.params.id;
    Activity.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    }); 
}

function editActivity(req, res) {
    var id = req.params.id;
    Activity.save({_id: id}, function(err, edited) {
        if (err)
            res.send(err)
        else
            res.json(edited)
    });
}

module.exports = router;