//first way
/*const express = require("express");
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

app.get("/signup", (req, res) => {
  console.log(req.body);
  const values = [
    req.body.password,
    req.body.First_Name,
    req.body.Second_Name,
    req.body.Email,
  ]

  db.query(
    "INSERT INTO loginid (password,First_Name,Second_Name,Email) VALUES(?)",
    [values],
    (err, result) => {
      if (err) throw err;
    }
  );
});
app.listen(3001, () => {
  console.log("Server is start");
});*/

//third way
const express = require("express");
const app = express();
const cors = require("cors");
// const db=require('../config/db');
app.use(cors());
// express.json(app);
app.use(express.json());

const userRoute=require("./routes/User");
app.use("/user",userRoute);
app.listen(5000, (req, res) => {
  console.log("server is started");
});

//second
// const express = require("express");
// const app = express();
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "Localhost",
//   user: "root",
//   password: "",
//   database: "mywebpr",
// });
// app.get("/signup", (req, res) => {
//   db.query(
//     "INSERT INTO loginid (password,First_Name,Second_Name,Email) VALUES('122','osama','hashmi','hashmiosama55')",(err,results)=>{
//       console.log(err);
//       res.send(results);
//     }
//   );
// });
// app.listen(3001, (req, res) => {
//   console.log("server is started");
// });
