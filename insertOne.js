var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // document for insert to collection
  var myobj = { name: "Company Inc", address: "Highway 37" };

  // select collection customers and insert document to collection
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(res)
    console.log("1 document inserted");
    db.close();
  });
}); 