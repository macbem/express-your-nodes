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
exports.delete = (req, res, next) => {
  if (req.xhr) {
    Quote.findOneAndRemove({_id: req.params.id}, (err, quote) => {
      if (err) return next(err);
      res.send('Success');
    });
  }
  else {
    res.status(403).send("Forbidden");
  }
}
exports.edit = (req, res, next) => {
  Quote.find({_id: req.params.id}, (err, item) => {
    if (err) return next(err);
    res.render('quotes/edit.handlebars', {quote: item[0], stylesheets: ["quotes"]})
  })
}
exports.update = (req, res, next) => {
  if(req.xhr) {
    Quote.update({_id: req.body.id}, {author: req.body.name, content: req.body.quote}, function() {res.send('Success');});
  }
}
exports.add = (req, res) => {
  if (req.xhr) {
    var newQuote = new Quote({author: req.body.name, content: req.body.quote});
    newQuote.save();
    res.json(newQuote);
  }
  else {
    res.status(403).send("Forbidden");
  }
}