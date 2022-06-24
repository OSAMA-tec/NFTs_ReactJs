const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

express.json(app);
app.use(cors());
const db = mysql.createConnection({
  username: "root",
  password: null,
  database: "mywebpr",
  host: "localhost",
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const values = [
    req.body.First_Name,
    req.body.Second_Name,
    req.body.password,
    req.body.Email,
  ]

  db.query(
    "INSERT INTO mywebpr (password,First_Name,Second_Name,Email) VALUES(?)",
    [values],
    (err, result) => {
      if (err) throw err;
    }
  );
});
app.listen(3001, () => {
  console.log("Server is start");
});
