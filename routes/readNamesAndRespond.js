var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Welcome");
});
router.post('/',function(req, res) {
    var postName = req.body.name;
    res.render('index', { name: postName });
});

module.exports = router;