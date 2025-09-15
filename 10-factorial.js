const { argv } = require('node:process');
const arg = parseInt(argv[2]);


let factorial=1;

for (let i =1; i<= arg; i++){

   factorial*=i;
}
  console.log(factorial);

