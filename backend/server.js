const express = require('express');
const app = express();
const cors = require('cors')

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/users', (req, res) => {
  // Some code
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