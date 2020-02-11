const db = require('../models/index');

const userController = (req, res) => {
  if (db && db.User) {
    db.User.findAll()
      .then(users => {
        res.send({users})
      })
      .catch(err => {
        res.status(500).send(err)
      });
  }
}

module.exports = userController;