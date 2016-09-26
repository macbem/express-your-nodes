var express = require('express'),
    quotes = require('../controllers/quotes'),
    router = express.Router();

router.get('/', quotes.list);

router.post('/', quotes.add);

module.exports = router;