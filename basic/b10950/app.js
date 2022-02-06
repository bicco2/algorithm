const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);


function solution(C, testCase) {
    for(let i = 0; i < C; ++i){
        const A1 = testCase[i].A;
        const B1 = testCase[i].B;
        console.log(A1 + B1);
    }
}