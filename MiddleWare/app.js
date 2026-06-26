const express = require("express");
const app = express();

// logger Middleware function to log request details
// inbuild-> morgan
app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("This is the second middleware function.");
});

app.use("/rand", (req, res, next) => {
  console.log("This is the third middleware function.");
  next();
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    console.log("Token is valid. Access granted.");
    next();
  } else {
    console.log("Token is invalid. Access denied.");
    res.status(401).send("Unauthorized");
  }
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/rand", (req, res) => {
  res.send("This is the /rand route.");
});
app.get("/api", checkToken, (req, res) => {
  res.send("This is the /api route, and you have access!");
});
app.get("wrong", (req, res) => {
  abcd = abcd;
  throw new Error("This is a custom error message.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
