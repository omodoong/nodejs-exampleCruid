var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  // connect to database mydb
  var dbo = db.db("mydb");
  console.log("Database Connected!");
  db.close();
});