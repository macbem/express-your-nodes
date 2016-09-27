var express = require('express'),
    quotes = require('../controllers/quotes'),
    router = express.Router();

router.get('/', quotes.list);

router.post('/', quotes.add);

router.get('/:id', quotes.edit);

router.delete('/:id', quotes.delete);

router.post('/:id', quotes.update);

module.exports = router;