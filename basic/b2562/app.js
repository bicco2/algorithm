const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input);

function solution(input){
    let cnt = 0;
    let maxIdx;
    let max = -100000000;
    for(let i = 0; i < input.length; i++){
        if(max < input[i]){
            max = input[i];
            cnt++;
            maxIdx = cnt;
        }
        else 
            cnt++;
    }

    console.log(`${max}\n${maxIdx}`);
}