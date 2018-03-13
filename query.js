var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// set for find First Alphabet in document
var query = { address: /^S/ };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  // find from query
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 