var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

// select quaery all letter S
var myquery = { address: /^S/ };

// update data name to Mimmie
var newvalues = {$set: {name: "Minnie"} };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
}); 