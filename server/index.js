import { contactsSchema } from '../src/schemas';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const jsonParser = bodyParser.json();

const users = [];

app.post('/sign-up', jsonParser, ({ body }, res) => {
  if (!body) return res.sendStatus(400);
  if (_.values(users).some(el => el.email === body.email)) {
    return res
      .status(400)
      .send({ field: 'email', message: `User with email ${body.email} already exist!` });
  }
  return contactsSchema
    .validate(body)
    .then(result => {
      users.push(result);
      return res.send(`New user ${result.name} added!`);
    })
    .catch(({ path: field, errors }) => {
      res.status(400).send({ field, message: errors[0] });
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(process.env.PORT || 8080);
