const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const jsonParser = bodyParser.json();

const users = [];

// eslint-disable-next-line consistent-return
app.post('/sign-up', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  if (_.values(users).some(el => el.email === req.body.email)) {
    res.send(`User with email ${req.body.email} already exist!`);
  } else {
    users.push(req.body);
    res.send(`New user ${req.body.name} added!`);
  }
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
