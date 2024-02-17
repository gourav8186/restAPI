var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dummy"
});

connection.connect(function(err) {
    if (err) throw console.log(err+"connection error in connection file");
    console.log("connection successfull !!");
});
module.exports = connection;

