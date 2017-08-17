// Passport 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// BCRYPT
const bcrypt = require('bcryptjs');

// APP
const app = require('./../index.js');
const db = app.get('db');

// VERIFY PASSWORD
const verifyPassword = (submittedPassword, userPassword) => {
  return bcrypt.compareSync(submittedPassword, userPassword);
};

// RUN WHEN LOGGED IN
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  db.user_search([username], (err, user) => {
    // Use first user object that comes back from user_search
    user = user[0];

    // If err, return err
    if (err) done(err);

    // If no user is found, return false
    if (!user) return done(null, false,  { message: 'Incorrect username.' });

    // If user is found, check if passwords match. If matches, return user
    if (verifyPassword(password, user.password)) return done(null, user);

    console.log('Console Log from passport testing');

    delete user.password;
    // If passwords do not match, return false
    return done(null, false, { message: 'Incorrect password.' });

  });
}));

// Puts the user on the session
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

module.exports = passport;
