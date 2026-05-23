const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: String,
  message: { type: String, maxLength: 50 },
  created_at: Date,
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
