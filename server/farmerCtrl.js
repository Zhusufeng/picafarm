const app = require('../index.js');
const db = app.get('db');

exports.searchFarm = (req, res) => {
  console.log('Search Farm');
  const data = req.body;
  db.farm_search((err, data) => {
    if (err) {
      console.log('Error Searching Farms');
      console.warn('Error', err);
      return res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};
