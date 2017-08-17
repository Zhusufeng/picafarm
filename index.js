const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//CROSS SITE SCRIPTING
const cors = require('cors');

//For session.
const session = require('express-session');

//Secrets.
// const config = require('./config.js');

//secrete session code file. --- later for individual accounts save.
// const config = require('./config.js');

//Sql Database connection tool --- later for db
const massive = require('massive'); //Postgres SQL tool

//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();
const port = process.env.PORT || 8080;

const public = path.join(__dirname + '/public/');


// =========Public root web Middleware======== //
app.use(bodyParser.json());
app.use(express.static(public));
// =========Public root web Middleware======== //

// =========SQL database======== //
var conn = massive.connectSync({
  connectionString: process.env.DATABASE_URL
});

// setting database connection.
app.set('db', conn);
const db = app.get('db');

// If database table is not found create.
db.table_check((err, response) => {
  if (response) {
    console.log('Table not exist. Creating new.');
  } else {
    console.log(err);
  }
});


// =========SQL database======== //

//Custom Scripts =========================
const user = require('./server/userCtrl.js');
const searchFarm = require('./server/farmerCtrl.js');

// Passport =========================
const passport = require('./server/passport.js');

//=== Passport End Points ===================
app.post('/login', passport.authenticate('local', {
  successRedirect: '/user/login/good'
}));

app.get('/logout', (req, res, next) => {
  req.logout();
  return res.status(200).send('logged out');
});

// End Points ======================
app.get('/search', searchFarm.searchFarm);

// User End Points ======================
app.post('/user/signup', user.makeUser);
app.get('/user/login/good', user.loginUser);

//===PORT====================================
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
