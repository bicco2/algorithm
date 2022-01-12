const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [a,b] = input;

solution(a,b);

function solution(a,b){
    const x1 = (b%10);
    const x2 = parseInt((b%100)/10);
    const x3 = parseInt(b/100);

    console.log(`${a * x1}\n${a * x2}\n${a * x3}\n${a*b}\n`);
}