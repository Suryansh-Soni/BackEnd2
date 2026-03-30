const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Sample posts
let posts = [
  { username: "Suryansh", content: "this is content section" },
  { username: "karan", content: "hello sir." },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  res.render("index", { posts: posts }); // Pass data to EJS
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
