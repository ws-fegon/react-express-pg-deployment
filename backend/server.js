const express = require('express');
const app = express();
const cors = require('cors')
const UserController = require('./controllers/user-controller')

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

app.use(cors())

require('./models/index')

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/users', UserController)


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});