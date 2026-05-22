const mysql = require("mysql2");
const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soni****5",
  database: "delta",
});

// Route
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS userCount FROM users";
  try {
    connection.query(q, (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Database error");
      }
      let userCount = result[0].userCount;
      res.render("home", { userCount });
    });
  } catch (err) {
    console.log(err);
    res.send("Database connection error");
  }
});

//show route
app.get("/show", (req, res) => {
  let q = "SELECT * FROM users";
  try {
    connection.query(q, (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Database error");
      }
      res.render("show", { users: result });
    });
  } catch (err) {
    console.log(err);
    res.send("Database connection error");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let userId = req.params.id;

  let q = "SELECT * FROM users WHERE id = ?";

  connection.query(q, [userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }

    let user = result[0];

    res.render("edit.ejs", { user });
  });
});
// Server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
