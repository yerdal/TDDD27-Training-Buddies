  module.exports = function(app, passport) {

     // show home page
     app.get('/', function(req, res) {
        
         res.render('index.ejs');
     });

     // show profile page
     app.get('/profile', isLoggedIn, function(req, res) {
         console.log(req.user.facebook);
         if (req.user.facebook.token)
         {
                 res.render('profile.ejs', {
                 user : JSON.stringify(req.user.facebook) // pass user to profile.ejs
             });
         }
     });
     
     app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email', 'user_location', 'user_birthday'] }));

     // handle the callback after facebook has authenticated the user
     app.get('/auth/facebook/callback',
         passport.authenticate('facebook', {
             successRedirect : '/profile',
             failureRedirect : '/'
         }));

     // logout
     app.get('/logout', function(req, res) {
         req.logout();
         res.redirect('/');
     });
 };

 // route middleware to make sure a user is logged in
 function isLoggedIn(req, res, next) {

     // if user is authenticated in the session, carry on
     if (req.isAuthenticated())
     {
         return next();

     }
     // if they aren't redirect them to the home page
     res.redirect('/');
 }