var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('survey');
});

router.get('/survey', function(req, res, next) {
  res.render('survey');
});

router.get('/new',  function(req, res, next) {
  res.render('surveys/new');
});


module.exports = router;
