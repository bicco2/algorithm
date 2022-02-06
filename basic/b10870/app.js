const fs = require("fs");
const num = fs.readFileSync("/dev/stdin");

function fibo(num) {
    if(num == 0){
        return 0;
    }   
    else if(num ==1){
        return 1;
    }
    else {
        return fibo(num-2)+ fibo(num-1);
    }
}

console.log(fibo(num));