const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "The Great Gatsby",
  price: 10.99,
  description: "A classic novel by F. Scott Fitzgerald."
});

book1
  .save()
  .then((res) => {
    console.log("Book saved:", res);
  })
  .catch((err) => console.log(err));