var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.post('/', bodyParser, function(req, res, next) {
    res.render('index', { name: req.body.name });
});

module.exports = router;