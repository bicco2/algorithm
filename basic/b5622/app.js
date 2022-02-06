const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input){
    let arr = input[0];
    let answer = 0;
    for(let i = 0; i<arr.length; i++){
        let c = arr[i];
        
        if (c >= 'W') {
            answer += 10;
        } else if (c >= 'T') {
            answer += 9;
        } else if (c >= 'P') {
            answer += 8;
        } else if (c >= 'M') {
            answer += 7;
        } else if (c >= 'J') {
            answer += 6;
        } else if (c >= 'G') {
            answer += 5;
        } else if (c >= 'D') {
            answer += 4;
        } else if (c >= 'A') {
            answer += 3;
        }
    }
    console.log(answer);
}