const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);

function solution(n, testArray){
    for(let i = 0; i<n; i++){
        let num1 = testArray[i].A;
        let num2 = testArray[i].B;
        console.log(`Case #${i+1}: ${num1} + ${num2} = ${num1+num2}`);
    }
}