const { argv } = require('node:process');

const arg =argv.slice(2);

console.log(`${arg[0]} is ${arg[1]}`);

