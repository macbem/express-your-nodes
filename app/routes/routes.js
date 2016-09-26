var express = require('express'),
    quotes = require('./quotes'),
    home = require('./home'),
    router = express.Router();

router.use('/', home);

router.use('/quotes', quotes);

module.exports = router;