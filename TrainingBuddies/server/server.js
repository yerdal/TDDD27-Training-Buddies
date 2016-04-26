var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
 var path = require("path");
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingbuddies');
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
var activityController = require("./controllers/activityController");
 app.use("/api", activityController);
var server = http.createServer(app);

var port = process.env.PORT || 3000;
console.log("PORT: " + port);
console.log("URI" + process.env.MONGOLAB_URI)
app.listen(port, function() {
console.log("Listening on " + port);
});
