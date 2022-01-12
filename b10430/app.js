const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(val => +val);

const [A,B,C] = input;

solution(A,B,C);

function solution(A,B,C){
    console.log((A+B)%C)
    console.log(((A%C) + (B%C))%C)
    console.log((A*B)%C)
    console.log(((A%C) * (B%C))%C)
}
