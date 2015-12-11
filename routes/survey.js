var express = require('express');
var Survey = require('../models/Survey');
var router = express.Router();


router.get('/', function(req, res, next){
  Survey.find({}, function(err, surveys){
    if(err){
      return next(err);
    }
    res.render('survey', {surveys: surveys});
  });
});



//router.get('/', function(req, res, next) {
//  res.render('survey');
//});




//router.get('/survey', function(req, res, next) {
//  res.render('survey');
//});

router.get('/new',  function(req, res, next) {
  res.render('surveys/new');
});

router.get('/survey/new',  function(req, res, next) {
  res.render('surveys/new');
});






router.get('/:id', function(req, res, next) {  //리다이렉트 포스트 아이디 받아서 포스트 찾기
  Survey.findById(req.params.id, function(err, Survey) {
    if (err) {
      return next(err);
    }
    
      res.render('surveys/show', {survey: Survey});
    });
});










router.post('/', function(req, res, next){
  var survey= new Survey({
    title: req.body.title,
    writer:req.body.writer,
    email: req.body.writer,
    content: req.body.content
  });
  
  survey.save(function(err){
    if (err) {
      return next(err);
    }
    res.redirect('/survey');
  });
}); //디비에 입력하는거


module.exports = router;
