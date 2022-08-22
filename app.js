'use strict'

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

var indexRouter = require('./routes/index');
var boardRouter = require('./routes/board');
var apiRouter = require('./routes/api');

const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'views'));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const connectLivereload = require("connect-livereload");

var app = express();
var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
  // store: MongoStore.create({
  //   mongoUrl: 'mongodb://docker:mongopw@localhost:49156'
  // })
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess))
app.use(passport.initialize());
app.use(passport.session());
app.use(connectLivereload());
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/', indexRouter);
app.use('/board', boardRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Page not found"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
