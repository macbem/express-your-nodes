var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home');

router.get('/', home.landing);

module.exports = router;