const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}

module.exports = (sequelize) => {
  User.init({
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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

  User.sync({ force: true })
  .then(() => {
    const users = [{
        username: 'Rick Sanchez',
        birthday: new Date(1951, 9, 1).getTime()
      },
      {
        username: 'Darth Vader',
        birthday: new Date(2928, 8, 11).getTime()
      },
      {
        username: 'Frodo Baggins',
        birthday: new Date(1882, 4, 22).getTime()
      }
    ]

    // create fake users
    users.forEach(user => {
      // Now the `users` table in the database corresponds to the model definition
      return User.create(user);
    });
  });

  return User
}
