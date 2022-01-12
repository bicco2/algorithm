const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(input){
    const result = [];
    
    for (let i = 97; i <= 122; i++) {
      result.push(input.indexOf(String.fromCharCode(i)));
    }

    console.log(result.join(" "));
}

