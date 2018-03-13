var MongoClient = require('mongodb').MongoClient;

// create database mydb
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database Created!");
  db.close();
});