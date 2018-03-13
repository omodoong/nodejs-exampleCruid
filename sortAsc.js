var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// set var sort asceding
var asc = { name: 1 };

// set var sort desceding
var dsc = { name: -1 };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  // choice one from var
  dbo.collection("customers").find().sort(asc).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 