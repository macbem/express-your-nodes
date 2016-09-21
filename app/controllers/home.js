var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Quote = mongoose.model('Quote');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/quotes', function(req, res, next) {
  Quote.find(function(err, item) {
    if (err) return next(err);
    res.render('quotes', {
      quote: item
    });
  })
})
router.post('/quotes', (req, res) => {
  var newQuote = new Quote({author: req.body.name, content: req.body.quote});
  newQuote.save();
  res.redirect('/quotes');
})