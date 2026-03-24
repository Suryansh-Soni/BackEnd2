const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

// 🎲 dice route
app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { num: dice });
});

// 📸 instagram route
app.get("/ig/:username", (req, res) => {
  // const followers = ["adam", "eve", "bob", "steve"];
  // let { username } = req.params;
  let {username}=req.params
  const instadata=require("./data.json")
  const data=instadata[username]
  res.render("instagram", { data });
});

// server start
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
