var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');    //페북인증
var configAuth = require('./config/auth');  // 페북인증

var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// mongodb connect  이부분은 내가 새로 수정하기
mongoose.connect('mongodb://webuser:webuser@ds053954.mongolab.com:53954/webwebweb');
mongoose.connection.on('error', console.log);

//uncomment after placing your favicon in /public    // 페북인증용
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));     // 페북인증용


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'long-long-long-secret-string-1313513tefgwdsvbjkvasd'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));


app.use('/', routes);
app.use('/users', users);





app.use(passport.initialize());    // 페북인증
app.use(passport.session());      // 페북인증용

app.use(function(req, res, next) {
  console.log("REQ USER", req.user);
  res.locals.currentUser = req.user;
  res.locals.flashMessages = req.flash();
  next();
});

configAuth(passport);  //페북인증용

app.use('/', routes);
app.use('/users', users);
//routeAuth(app, passport);   //페북인증용



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
