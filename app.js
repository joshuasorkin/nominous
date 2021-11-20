const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const songRouter = require('./routes/song');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/song',songRouter);

// catch 404 error
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({error:`Unfortunately, the page ${req.url} does not exist.`}))
});

module.exports = app;
