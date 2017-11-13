var mongodb = require('mongodb').MongoClient;
var mongoDBURI = process.env.MONGODB_URI ||'mongodb://CJV:doritos61@ds153015.mlab.com:53015/heroku_qttgdqm3';
module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

module.exports.getAllOrders = function(req, res, next) {
    mongodb.connect(mongoDBURI, function(err, db) {
        if (err) throw err;

        var dbColl = db.collection('ORDERS');
        dbColl.find({ }).toArray(function(err, docs) {
            if (err) throw err;
            console.log(docs);
            res.render('getAllOrders', { data: docs});
        });

        db.close(function (err) {
            if (err) throw err;
        });
    });
};