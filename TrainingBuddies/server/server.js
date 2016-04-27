var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
var path = require("path");
var passport = require("passport");
var session = require("express-session");
var reactViews = require('express-react-views');
var flash = require("connect-flash");

console.log(process.env.MONGODB_URI);

//require("../config/passport")(passport);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingbuddies');
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
var activityController = require("./controllers/activityController");
app.use("/api", activityController);
var server = http.createServer(app);

var port = process.env.PORT || 3000;
console.log("PORT: " + port);
console.log("URI" + process.env.MONGOLAB_URI)

app.set('view engine','jsx');
app.engine('jsx', reactViews.createEngine());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*Routes*/
require('../app/routes.js')(app, passport); 



app.listen(port, function() {
console.log("Listening on " + port);
});

// Setting up the server

/*var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var path = require('path');
var configDB = require('../config/database.js');

var morgan = require('morgan');

//mongoose.connect(configDB.url);

require('../config/passport')(passport); // pass passport for configuration
// for debuging see all post and gets from webpage
app.use(morgan('dev'));

//used for local files
app.use(express.static(path.join(__dirname, './views')));

// 
app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
// Change to html if you want
app.set('view engine', 'html');

/*Passportjs
app.use(session({ 
	secret: 'Iamjusttesting',
    resave: true,
    saveUninitialized: true 

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*Routes
require('../app/routes.js')(app, passport); 

/*Start the application locally
app.listen(port);
console.log('app is listening on port: ' + port);*/
