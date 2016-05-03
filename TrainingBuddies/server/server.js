var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
var path = require("path");
var passport = require("passport");
var pass = require('../config/passport.js')(passport);
var session = require("express-session");
var flash = require("connect-flash");

console.log(process.env.MONGODB_URI);
var connectString = "mongodb://localhost:27017/trainingbuddies";

//require("../config/passport")(passport);

mongoose.connect(process.env.MONGODB_URI || connectString);
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
var activityController = require("./controllers/activityController");
app.use("/api", activityController);
var server = http.createServer(app);

var port = process.env.PORT || 3000;
console.log("PORT: " + port);
console.log("URI" + process.env.MONGOLAB_URI)


//app.set('views', "./app/");
//app.set('view engine','ejs');
//app.engine('jsx', require('express-react-views').createEngine());
//app.engine('jsx', reactViews.createEngine());

app.set('views', "./app/");
app.set('view engine','ejs');
app.engine('jsx', require('express-react-views').createEngine());

app.use(session({ secret: 'hejduhej' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

/*Routes*/
require('../app/routes.js')(app, passport); 



app.listen(port, function() {
console.log("Listening on " + port);
});
