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
