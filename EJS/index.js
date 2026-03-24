const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const instadata = require("./data.json"); // ✅ move outside

//serving static files
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { num: dice });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const data = instadata[username];
  if (!data) {
    return res.send("User not found ❌");
  }
  res.render("instagram", { data });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
