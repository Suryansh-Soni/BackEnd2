const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soni****5",
  database: "validation_practice",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

// Home Route
app.get("/", (req, res) => {
  res.send("Server Running...");
});

// Login Route
app.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Invalid email")
      .isLength({ min: 12, max: 20 })
      .withMessage("Email must be between 8 and 20 characters"),

    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  (req, res) => {
    // Validate first
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json(errors.array());
    }

    // Database query only if validation passes
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("Error");
      }

      if (data.length > 0) {
        return res.json("Success");
      }

      return res.json("Fail");
    });
  },
);
// Create User Route
app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (email, password) VALUES (?, ?)";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }

    return res.json("User Registered Successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
