var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
 var path = require("path");
var uri = process.env.MONGODB_URI;
console.log(uri);
//mongoose.connect("mongodb://heroku_f84lvj7p:cc9ono05fvtrkehhvonnfgc1q8@ds047642.mlab.com:47642/heroku_f84lvj7p" || 'mongodb://localhost/trainingbuddies');
mongoose.connect(uri);
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
var activityController = require("./controllers/activityController");
 app.use("/api", activityController);
var server = http.createServer(app);

var port = process.env.PORT; //|| 3000;
console.log("PORT: " + port);
console.log("URI" + process.env.MONGOLAB_URI)
app.listen(port, function() {
console.log("Listening on " + port);
});



/*var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var http = require('http');
var activityController = require("./controllers/activityController");


var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/api", activityController);
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});
console.log("hej");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/trainingbuddies");*/
