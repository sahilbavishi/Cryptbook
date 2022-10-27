const mongoose = require("mongoose");
const mongodb = require("mongodb");
const bcrypt = require("bcryptjs");
const client = mongodb.MongoClient;

let url = "mongodb+srv://kapsas:kapsas@cluster0.ybvdkeb.mongodb.net/?retryWrites=true&w=majority";
let pwd = "";
let uname = "";
let pass= bcrypt.hashSync(pwd,10);
client.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kapsas");
    var myobj = { username: uname, password: pass };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });