const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let primeNumbers = [];
let sumPrimeNum = 0;

function solution(input) {

    if(input < 2){
        return;
    }

    for(let i = 2; i < input; i++){
        if(input % i === 0){
            return;
        }
    }
    //for문이 return 값이면 counter 까지 못온다 .
    primeNumbers.push(input);
    sumPrimeNum += input;

   
}

for(let i = +input[0]; i <= +input[1]; i++){
    solution(i);
}

if(primeNumbers.length > 0){
    console.log(sumPrimeNum);
    console.log(primeNumbers[0]);
}
else {
    console.log(-1);
}






