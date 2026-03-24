const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/rolldice", (req, res) => {
  let dice= Math.floor(Math.random()*6);
  res.render("rolldice",{num:dice});
});


app.listen(port, () => {
  console.log(`running on port ${port}`);
});
