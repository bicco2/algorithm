const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];

solution(input);

function solution(N){
    let firstNum = 665;

    while(N>0){
        firstNum++;
        if(firstNum.toString().includes('666')){ //  if(firstNum.toString().indexOf('666') != -1){
            N--;
        }
        
    }
    console.log(firstNum);
}