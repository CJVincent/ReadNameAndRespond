var express = require('express');
var router = express.Router();

var ControllerMain = require('../controllers/main');

/* GET home page. */
router.get('/', ControllerMain.index);

router.get('/db', ControllerMain.getDB);

module.exports = router;
