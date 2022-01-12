const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

solution(input);

function solution(input){
    for(let i = input; i >= 1; i--){
        console.log(i);
    }
}