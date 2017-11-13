var express = require('express');
var router = express.Router();

var ControllerMain = require('../controllers/database');

/* GET home page. */
router.get('/', ControllerMain.index);

router.get('/getAllOrders', ControllerMain.getAllOrders);

module.exports = router;
