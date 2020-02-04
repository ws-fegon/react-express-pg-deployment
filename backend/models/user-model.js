const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}

module.exports = (sequelize) => {
  User.init({
    // attributes
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthday: {
      type: Sequelize.DATE
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'user'
    // options
  });

  // User.sync().then(() => {
  //   // Now the `users` table in the database corresponds to the model definition
  //   return User.create({
  //     username: 'John Doe',
  //     birthday: new Date(1999, 1, 1).getTime()
  //   });
  // });

  return User
}
