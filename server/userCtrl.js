const app = require('../index.js');
const db = app.get('db');

// BCRYPT
const bcrypt = require('bcryptjs');

// =========HASH PASSWORD========== //
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
// =========HASH PASSWORD========== //


exports.makeUser = (req, res) => {
  console.log('MakeUser from user Ctrl');
  const data = req.body;

  // Hash the password
  data.password = hashPassword(data.password);

  db.user_create([data.username, data.password, data.grower, data.customer, data.email], (err, data) => {
    if (err) {
      console.log('Error occur creating makeUser');
      console.warn('Error', err);
      return res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.loginUser = (req, res) => {
  console.log('LoginUser from user Ctrl');
  const data = req.body;

};