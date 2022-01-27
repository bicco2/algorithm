const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const a = Number(input[0]);

let result ="";

function star(i, j, num){
    if(i %3==1 && j%3 ==1){
        result += " ";
    }
    else { 
        if(num == 1){
            result += "*";
        }
        else{
            star(Math.floor(i/3), Math.floor(j/3), Math.floor(num/3));
        }
    }
}
function printStar(num){
    for(let x = 0; x<num; x++){
        for(let y = 0; y<num; y++){
            star(x,y,num);
        }
        if(x != num-1){   
            result+="\n";
        }
    }
    console.log(result);
}

printStar(a);





