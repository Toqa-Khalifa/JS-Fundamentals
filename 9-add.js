
const { argv } = require('node:process');
const arg2 =parseInt(argv[2]);
const arg3 =parseInt(argv[3]);

if (arg2 && arg3){
  console.log(  add(arg2,arg3));
} else {
  console.log(NaN);
}
function add(a,b){
  return a+b;
}

