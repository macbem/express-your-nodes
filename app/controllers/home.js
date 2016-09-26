var express = require('express'),
  router = express.Router();

exports.landing = (req, res) => {
  res.render('landing', {
    title: 'Abiotic Solutions',
  });
}