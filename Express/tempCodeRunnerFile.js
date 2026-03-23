app.post("/", (req, res) => {
  console.log(req.body); // incoming data
  res.send("Data received hello");
});