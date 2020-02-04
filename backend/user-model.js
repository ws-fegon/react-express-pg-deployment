const Sequelize = require('sequelize');

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.Date
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

module.exports = User;