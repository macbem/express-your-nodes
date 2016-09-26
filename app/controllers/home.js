var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Quote = mongoose.model('Quote');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  if (err) return next(err);
  res.render('landing', {
    title: 'Abiotic Solutions',
  });
});