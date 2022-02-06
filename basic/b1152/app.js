const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

solution(input);

console.log(input);

function solution(input){
   let cnt =0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '') {
          cnt++;
        }
      }
      console.log(cnt);
}