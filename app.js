const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 error
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({error:`Unfortunately, the page ${req.url} does not exist.`}))
});

module.exports = app;
