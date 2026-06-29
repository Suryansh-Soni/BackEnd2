const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
}); //listen for incomming request on given port

// app.use((req, res) => {
//   // used to listen all the requests

//   console.log("hello sir .");
//   //this res can have obj , string anything
//   //   res.send("this is basic res.");
//   //   res.send({ name: "suryansh", age: 20 });
//   //   let code="<h1>html</h1>"
//   res.send("<h1>html</h1>"); //only one time in a app.use
// });

// .get is for listening to specific path : any other raoute give not found or any custom error response.

app.get("/", (req, res) => {
  res.send("you connected root path");
});

app.get("/apple", (req, res) => {
  res.send("conected to apple .");
});

// // catch-all route
// app.use((req, res) => {
//   res.status(404).send("This path does not exist");
// });

// app.post("/", (req, res) => {
//   console.log(req.body); // incoming data
//   res.send("Data received hello");
// });


// path parameters
// app.get("/:username/:id", (req, res) => {
//   console.log(req.params);
//   let { username, id } = req.params;
//   res.send("whelcome to page of yours .");
// });

// query strings 
app.get("/search", (req, res) => {
  let {q}=req.query;
  let code =`<h1>Search results for query <u>${q}<u></h1>`;
  res.send(code)
});
