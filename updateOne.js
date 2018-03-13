var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

// select quaery
var myquery = { address: "Valley 345" };

// update var data (set data update)
var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
}); 