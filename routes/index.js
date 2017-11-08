var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var mongoDBURI = process.env.MONGODB_URI ||'mongodb://CJV:doritos61@ds125565.mlab.com:25565/heroku_wkfmg3vq';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/db', function(req, res, next) {
    mongodb.connect(mongoDBURI, function(err, db) {
        if (err) throw err;

        var dbColl = db.collection('ORDERS');
        dbColl.find({ }).toArray(function(err, docs) {
            if (err) throw err;
            console.log(docs);
            res.render('db', { data: JSON.stringify(docs)});
        });

        db.close(function (err) {
            if (err) throw err;
        });
    });
});

module.exports = router;
