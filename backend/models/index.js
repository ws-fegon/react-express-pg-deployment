const POSTGRES_DB = process.env.POSTGRES_DB || 'newpgdb';
const POSTGRES_USER = process.env.POSTGRES_USER || 'newpguser';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '%wBYU1iNV5@V!';
const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';

let db = {}

const { Sequelize } = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: 'postgres'
});




sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    db.User = sequelize.import('./user-model');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = db;
