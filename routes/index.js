var express = require('express');
var survey = require('./survey');
var User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});


router.use('/survey', survey);

module.exports = router;
