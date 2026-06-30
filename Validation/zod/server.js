const express = require("express");
const { loginSchema, registerUserSchema } = require("./validator/validator");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/login", (req, res) => {
  const { data, error } = loginSchema.safeParse(req.body);
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});

app.post("/register", (req, res) => {
  const { success, data, error } = registerUserSchema.safeParse(req.body);
  if (!success) {
    console.log(error);
    return res.status(400).json({
      message: error.issues[0].message,
    });
  } else {
    console.log(data);
    res.send("registration done .");
  }
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
