const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const contactsSchema = require('../src/schemas');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const jsonParser = bodyParser.json();

const users = [];

app.post('/sign-up', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  if (_.values(users).some(el => el.email === req.body.email)) {
    return res
      .status(400)
      .send({ field: 'email', message: `User with email ${req.body.email} already exist!` });
  }
  users.push(req.body);
  return res.send(`New user ${req.body.name} added!`);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
