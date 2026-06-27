const mongoose = require("mongoose");
const Chat = require("./models/chat");
const User = require("./models/user");
const Post = require("./models/post");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  console.log("Connected to MongoDB");
}

async function seedDB() {
  try {
    await main();

    const chat = [
      {
        from: "Alice",
        to: "Bob",
        message: "Hello, Bob!",
        created_at: new Date(),
      },
      {
        from: "Bob",
        to: "Alice",
        message: "Hi, Alice!",
        created_at: new Date(),
      },
    ];

    const savedChats = await Chat.insertMany(chat);
    console.log("Chats saved:", savedChats);

    const users = [
      {
        username: "Alice",
        password: "password123",
        email: "alice@example.com",
      },
      {
        username: "Bob",
        password: "password456",
        email: "bob@example.com",
      },
    ];

    const savedUsers = await User.insertMany(users);
    console.log("Users saved:", savedUsers);

    const posts = [
      {
        content: "This is my first post!",
        author: savedUsers[0]._id,
      },
      {
        content: "This is my second post!",
        author: savedUsers[1]._id,
      },
    ];

    const savedPosts = await Post.insertMany(posts);
    console.log("Posts saved:", savedPosts);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

seedDB();