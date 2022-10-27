var db = require("mysql");

var connection = db.createConnection({
    host:"buep3ulcbxagttww4o88-mysql.services.clever-cloud.com",
    port:"3306",
    user:"uiwvssjjk04fzpoz",
    password:"4wEYWvm23zH3SUOqiSxc",
    database: "buep3ulcbxagttww4o88"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
connection.end();
