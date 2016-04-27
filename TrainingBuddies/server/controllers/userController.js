var mongoose = require("mongoose");
var User = require("../data/user");
var _ = require("underscore");

var router = require("express").Router();
router.route("/activities/:id?").get(getUser).post(addUser).delete(deletUser);

function getUser(req, res) {
    User.find(function (err, user) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function addUser(req, res) {
    var user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(activity);
    });
}

function deleteUser(req, res) {
    var id = req.params.id;
    User.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;