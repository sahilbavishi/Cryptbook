// const mongoose=require("mongoose");
const mongodb=require("mongodb");
const dotenv=require("dotenv");

dotenv.config({path:__dirname+'/./../.env'})
const dbclient=mongodb.MongoClient;
const dbURI=`mongodb+srv://${process.env.dbUser}:${process.env.dbPwd}@cluster0.ybvdkeb.mongodb.net/?retryWrites=true&w=majority`

dbclient.connect(dbURI,(err,db)=>
{
if (err) throw err;
console.log("Connected");
db.close();
});

console.log(dbURI);
// console.log(process.env)

