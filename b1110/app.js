const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(input){

    let result = input;
    let count = 0;

    do {
        let sum = (Math.floor(result / 10) + result % 10) % 10;
        result = (result % 10) * 10 + sum;
        count++;
      } while (result !== input);
      
      console.log(count);
}