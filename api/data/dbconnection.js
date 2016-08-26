var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/haven';
var _connection = null;

var open = function() {
  MongoClient.connect( dburl, function( err, db ) {
    if(err) {
      console.log(err);
      return;
    }
    _connection = db;
    console.log("Successfully connected to database");
  });
};

var get = function() {
  return _connection;
}

module.exports = {
  open : open,
  get : get
}
