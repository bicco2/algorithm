const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1], C: tempValue[2] });
}

solution(+input[0], testCaseArray);

function solution(n, example){ //A = 6, B = 12, C = 10 
    for(let i =0; i<n; i++){
        if(example[i].C%example[i].A == 0 ){
            console.log(String(example[i].A)+ String(Math.floor(example[i].C/example[i].A)).padStart(2,"0"));
        }else 
            console.log(String(example[i].C%example[i].A) + String(Math.floor(example[i].C/example[i].A + 1)).padStart(2,"0"));
    }
}