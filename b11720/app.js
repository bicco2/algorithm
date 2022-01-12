const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(n, arrayA){
        let sum = 0;
        for (let i = 0; i < n; ++i) { //N은 정수가 아닌데 이게 돌 수 가 있는 건가? 
            sum += +arrayA[i];
        }
        console.log(sum);
}