const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let primeNumbers = [];

function solution(input) {
    let div = 2;

    while(true){
        if(input%div == 0){
            input = input/div;
            primeNumbers.push(div);
            div = 1;
        }
        div++;
   
        if(div > input){
            break;
        }

    }
    if(input < 2){
        return;
    }
}

solution(+input[0]);

for(let i = 0; i<primeNumbers.length; i++){
    console.log(primeNumbers[i]);
}