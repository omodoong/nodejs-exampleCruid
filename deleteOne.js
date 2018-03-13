var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// set var for delete document
var myquery = { address: 'Mountain 21' };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
}); 