const express = require('express');
const app = express();
const cors = require('cors')
const { Sequelize, Model, DataTypes } = require('sequelize');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_HOST = process.env.POSTGRES_HOST;

// Option 1: Passing parameters separately
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_PASSWORD,
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    require('./user-model')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  res.send({
    users: [{
      username: 'John Doe',
      birthday: new Date(1999, 1, 1).getTime()
    }]
  });
})


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});