let book1 = new Book({
  title: "The Great Gatsby",
  price: 10.99,
  description: "A classic novel by F. Scott Fitzgerald.",
});
book1
  .save()
  .then((res) => {
    console.log("Book saved:", res);
  })
  .catch((err) => console.log(err));
