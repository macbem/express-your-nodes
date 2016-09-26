var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

exports.landing = (req, res) => {
  res.render('landing', {
    title: 'Abiotic Solutions',
  });
}