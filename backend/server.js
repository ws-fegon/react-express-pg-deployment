const express = require('express');
const app = express();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  // Some code
  res.send({});
})


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});