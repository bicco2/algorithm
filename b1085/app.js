const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let newNum = [];

function solution(input){
   newNum.push(input[0]);
   newNum.push(input[1]);
    newNum.push(input[2]-input[0]);
    newNum.push(input[3]-input[1]);

    let min = 100000000 ;

    for(let i = 0; i < newNum.length; i++){
        if(min > +newNum[i]){
            min = +newNum[i];
        }
    }

    console.log(min);
}

solution(input);