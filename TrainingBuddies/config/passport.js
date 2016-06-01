
var FacebookStrategy = require('passport-facebook').Strategy;

// load user model
var User       = require('../server/data/user');

var configAuth = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    var calcAge = function(birthday){
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;

    }
    // facebook login
    passport.use(new FacebookStrategy({

        // get some auth variables
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : ['id', 'name', 'email', 'picture.type(large)', 'location', 'birthday']
    },

    // facebook gives us token and profile
    function(token, refreshToken, profile, done) {

        process.nextTick(function() {

            // find the user in the database
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                if (err)
                {
                    return done(err);
                }

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } 
                else {         
                    // if no user, create user
                    var newUser            = new User();
                    // set the user model variables
                    newUser.facebook.id    = profile.id;                  
                    newUser.facebook.token = token;                  
                    newUser.facebook.name  = profile.name.givenName;
                    newUser.facebook.lastname = profile.name.familyName;
                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                    newUser.facebook.picture = profile.photos[0].value;
                    var str = profile._json.location.name;
                    var strArray = str.split(', ');
                    newUser.facebook.city = strArray[0];
                    newUser.facebook.country = strArray[1];

                    newUser.facebook.age = calcAge(profile._json.birthday);

                    // save user to db
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));

};