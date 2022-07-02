const mysql = require("mysql");

const db = mysql.createConnection({
  host: "Localhost",
  user: "root",
  password: "",
  database: "mywebpr",
});

module.exports=db;