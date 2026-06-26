const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const { render } = require("ejs");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("rooot working");
});

// app.get("/chats",(req, res)=>{
//   let chat=Chat.find().then((chats)=>{
//     res.render("chats", { chats });
//   }).catch(err => console.log(err));
// });

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });

  newChat
    .save()
    .then((chat) => {
      console.log("Chat saved:", chat);
      res.redirect("/chats");
    })
    .catch((err) => console.log(err));
});

//edit route

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;

  let chat = await Chat.findById(id);

  console.log("Chat found:", chat);

  res.render("edit.ejs", { chat });
});

//update route

app.put("/chats/:id", (req, res) => {
  
  let { id } = req.params;
  
  let { message: newmessage } = req.body;

  let updatedchat = Chat.findByIdAndUpdate(
    id,
    { message: newmessage },
    { runValidator:true, new: true },
  )
    .then((chat) => {
      console.log("Chat updated:", chat);
      res.redirect("/chats");
    })
    .catch((err) => console.log(err));
});

app.delete("/chats/:id", (req, res) => {
  let { id } = req.params;
  Chat.findByIdAndDelete(id)
    .then((chat) => {
      console.log("Chat deleted:", chat);
      res.redirect("/chats");
    })
    .catch((err) => console.log(err));
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
