const { argv } = require('node:process');

let arg = parseInt(argv[2]);


if (typeof arg === "number"){
  console.log(`My number: ${arg}`);
} else {
  console.log("Not a number");
}