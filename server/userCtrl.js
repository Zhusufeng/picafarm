const app = require('../index.js');
const db = app.get('db');

exports.makeUser = (req, res) => {
  console.log('MakeUser from user Ctrl');
  const data = req.body;
  db.temp_insert([data.username, data.password, data.grower, data.customer, data.email], (err, data) => {
    if (err) {
      console.log('Error occur creating makeUser');
      console.warn('Error', err);
      return res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};