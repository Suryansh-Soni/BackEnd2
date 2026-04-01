const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Sample posts
let posts = [
  { id: uuidv4(), username: "Suryansh", content: "this is content section" },
  { id: uuidv4(), username: "karan", content: "hello sir." },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  res.render("index", { posts: posts }); // Pass data to EJS
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let newId = uuidv4();
  posts.push({ id: newId, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show", { post: post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let { content } = req.body;
  let post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  post.content = content;
  res.send("Post updated successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
