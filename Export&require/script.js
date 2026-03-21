// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// args = process.argv;
// for (i = 2; i < args.length; i++) {
//   console.log(args[i]);
// }

// let value = require("./math");
// console.log(value);


// requiring directories : find index.js from that directory 
// and then the export part is exported . index.js is the entry point (like main() in C).
let info=require("./fruits")
console.log(info)