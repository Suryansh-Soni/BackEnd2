const express = require("express");
const app = express();
const port = 3000;

// middleware to read POST data
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  let { name, age } = req.query;
  res.send(`Welcome to GET page ${name}, Age: ${age}`);
});

app.post("/register", (req, res) => {
  let { name, age } = req.body;
  res.send(`Welcome to POST page ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
