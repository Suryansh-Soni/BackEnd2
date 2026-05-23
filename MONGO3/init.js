const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat=[{
    from: "Alice",
    to: "Bob",
    message: "Hello, Bob!",
    created_at: new Date(),
  },{
    from: "Bob",
    to: "Alice",
    message: "Hi, Alice!",
    created_at: new Date(),
  }]
Chat.insertMany(chat).then((res)=>{
    console.log("Chat saved:", res);
}).catch(err => console.log(err));
