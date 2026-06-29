const figlet = require("figlet");

async function doStuff() {
  figlet.text("Hello World!!", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
}

doStuff();

figlet.text(
  "Boo!",
  { 
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

