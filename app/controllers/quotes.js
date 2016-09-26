var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Quote = mongoose.model('Quote');

exports.list = (req, res, next) => {
  Quote.find(function(err, item) {
    if (err) return next(err);
    res.render('quotes', {
      quote: item,
      stylesheets: ["quotes"]
    });
  })
}

exports.add = (req, res) => {
  var newQuote = new Quote({author: req.body.name, content: req.body.quote});
  newQuote.save();
  res.redirect('/quotes');
}