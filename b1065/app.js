const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

solution(input);

function solution(input){
    let cnt = 0;
    for(let i = Number(input); i >= 1; i--){
        if(String(i).length > 2){ 
            const gap = [];
            for(let j = 0; j<String(i).length-1; j++){ 
                gap[j] = Number(String(i)[j]) - Number(String(i)[j+1]);
            }
            if(gap[0] == gap[1]){
                cnt++;
            }
        }
        else {
            cnt++;
        }
    }
    console.log(cnt);
}