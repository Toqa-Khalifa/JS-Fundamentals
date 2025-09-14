const { argv } = require('node:process');
let X ="";
let arg = parseInt(argv[2]);
if(arg){
  for (i=0; i< arg; i++){
    X+= "X";
  }

  for(i=0; i<arg; i++){
    console.log(X); 
  }
} else {
  console.log("Missing size");
}

