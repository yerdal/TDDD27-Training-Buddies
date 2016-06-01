var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
var path = require("path");
var passport = require("passport");
var pass = require('../config/passport.js')(passport);
var session = require("express-session");

console.log(process.env.MONGODB_URI);
var connectString = "mongodb://localhost:27017/trainingbuddies";

//require("../config/passport")(passport);
//heroku or local?
mongoose.connect(process.env.MONGODB_URI || connectString);

app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
var activityController = require("./controllers/activityController");
app.use("/api", activityController);
var server = http.createServer(app);
// heroku or local?
var port = process.env.PORT || 3000;


app.set('views', path.join(__dirname,"../app/dist"));
app.set('view engine','ejs');

app.use(session({ secret: 'hejduhej' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

/*Routes*/
require('../app/routes.js')(app, passport); 



app.listen(port, function() {
console.log("Listening on " + port);
});
