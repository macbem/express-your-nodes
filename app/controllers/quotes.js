var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Quote = mongoose.model('Quote');

module.exports = function (app) {
  app.use('/', router);
};

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