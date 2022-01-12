const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(numN, minX, arrayA) {
    let minNum = "";
    for(let i = 0; i<numN; i++){
        if(arrayA[i]< minX){
            minNum += arrayA[i];
            minNum += " ";
        }
    }
    console.log(minNum);
}