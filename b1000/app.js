const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
//그냥 여기서 split 해서 

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A + B);
}