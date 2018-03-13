var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// select var all docuemnt letter O
var myquery = { address: /^O/ };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
}); 