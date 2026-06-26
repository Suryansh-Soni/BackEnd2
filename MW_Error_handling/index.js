const express = require("express");
const app = express();
const port = 8080;
const CustomeError = require("./CustomError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  console.log(token);
  if (token === "123") {
    next();
  } else {
    throw new CustomeError(401, "access denied");
  }
};
app.get("/err", (req, res) => {
  abc = abc;
});
app.get("/api", checkToken, (req, res) => {
  res.send("Hello World");
});

app.get("/admin", (req, res) => {
  throw new CustomeError(403, "admin access denied");
});

// app.use((err, req, res, next) => {
//     console.log("error---------------------------");
//     res.send(err);
// });

app.use((err, req, res, next) => {
  let { status = 500 } = err;
  res.status(status).send(err.message);
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
