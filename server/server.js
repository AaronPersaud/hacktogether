// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;       

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var mongodbPath = 'mongodb://127.0.0.1:27017/hackthesixdb';

var router = express.Router();              

router.route('/users')
    
    .get(function(req, res) {
        console.log(req);
        var userName = req.query.user;
        var password = req.query.pass;
        var fName = req.query.firstName;
        var lName = req.query.lastName;
        var gender = req.query.gender;
        var age = req.query.age;
        MongoClient.connect(mongodbPath, function (err, db) {
            if (err) {
                
            } else {
                var collection = db.collection('users');
                collection.insert({'username': userName, 'password': password, 'firstName': fName, 'lastName': lName,
               'gender': gender, 'age': age }, function(err, docs) {
                    db.close();
                    res.jsonp({status: 'succesfully added user!', 'docs': docs});
                });

            }

        });

    });


app.use('/api', router);
app.listen(port);