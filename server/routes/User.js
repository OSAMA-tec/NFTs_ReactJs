const express = require("express");
const router = express.Router();
const db=require('../config/db');
router.post("/register", (req, res) => {
    console.log(req.body);
  
    const password = req.body.password;
    const First_Name = req.body.First_Name;
    const Second_Name = req.body.Second_Name;
    const Email = req.body.Email;
    console.log(password);
    db.query(
      "INSERT INTO loginid (password,First_Name,Second_Name,Email) VALUES(?,?,?,?);",[password,First_Name,Second_Name,Email],
      (err, results) => {
        console.log(err);
        res.send(results);
      }
    );
  });

module.exports = router;