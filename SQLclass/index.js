const mysql = require("mysql2");
const express = require("express");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

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
      console.log(result[0].userCount);
      let userCount = result[0].userCount;
      res.render("home", { userCount });
    });
  } catch (err) {
    console.log(err);
    res.send("Database connection error");
  }
});

//show route
app.get("/user", (req, res) => {
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
    console.log(result[0]);
    let user = result[0];

    res.render("edit.ejs", { user });
  });
});

app.patch("/user/:id", (req, res) => {
  let userId = req.params.id;
  let { username, email } = req.body;
  let q = "update users set name =? , email=? where id=?";
  let user = [username, email, userId];
  connection.query(q, user, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }

    res.redirect("/user");
  });
});

// create new route
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user", (req, res) => {
  let id = uuidv4();
  let { name, email } = req.body;

  let q = "INSERT INTO users (id, name, email) VALUES (?, ?, ?)";

  connection.query(q, [id, name, email], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }
    res.redirect("/user");
  });
});

//delete
app.delete("/user/:id/delete", (req, res) => {
  let userId = req.params.id;
  let q = "DELETE FROM users WHERE id = ?";
  connection.query(q, [userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }
    res.redirect("/user");
  });
});

// Server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
