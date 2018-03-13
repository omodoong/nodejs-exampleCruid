var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // select collection customer and all document
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    
    // print all document
    console.log(result);
    db.close();
  });
}); 