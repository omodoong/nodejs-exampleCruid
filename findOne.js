var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // select collection customer and fint one document
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;

    // print one document from var name
    console.log(result.name);
    db.close();
  });
}); 