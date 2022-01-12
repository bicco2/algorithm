const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input);

function solution(input){
    const restArr = [];
    for(let i = 0; i < input.length; i++){
        let restNum = input[i] % 42;
        if(restArr.indexOf(restNum) == -1){
            restArr.push(restNum);
        }
    }

    console.log(restArr.length);
}
