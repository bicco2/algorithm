const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const inputC = +input[0];

solution(inputC);

function solution(n) {
    let sum = 0;
    for(let i = 1; i<=n; ++i){
        sum += i;
    }
    console.log(sum);
}