const express = require("express");
const { validateSignin } = require("./validator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const signUpSchema = Joi.object({
//   email: Joi.String().email().required(),
//   password: Joi.String().min(3).max(10).required(),
// });

app.post("/signup", (req, res) => {
  //    const {errpr,value}= signUpSchema.validate(req.body );
  const { error, value } = validateSignin(req.body, { abortEarly: false });

  if (error) {
    console.log(error);
    return res.send(error.details);
  }

  res.send("success in signing in.");
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
