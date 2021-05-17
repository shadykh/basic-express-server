'use strict';

const express = require('express');

const app = express();

const error500Handler = require('./error-handlers/500');

const error404Handler = require('./error-handlers/404');

const logger = require('./middleware/logger');

const validator = require('./middleware/validator');

app.use(logger);

app.use(validator);

app.get('/', homeHandler);

app.get('/person', personHandler);

app.get('/iwannawrong', wrongHandler);

app.use('/iwannawrong',error500Handler);

app.use('*', error404Handler);

function homeHandler(req, res) {
  res.send('I am on fire🔥');
}

function personHandler(req, res) {
  res.json({
    name: req.query.name,
  });
}

function wrongHandler(req, res) {
  throw new Error('You Got what you want!! Something went wrong :|');
}
 

function start(port) {
  app.listen(port, () => {
    console.log(`🚀 ~ file: server.js ~ line 46 ~ app.listen ~ we are launching 🔥 on port => ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};