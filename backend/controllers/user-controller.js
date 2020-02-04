const db = require('../models/index');

const userController = (req, res) => {
  db.User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
    res.send({users})
  });
}

module.exports = userController;