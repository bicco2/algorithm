const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const num = input[0];
const arrayA = input[1].split(' ').map((item) => +item);

solution(+num, arrayA);

function solution(n, testArray){
    let max = -1000000000;
    let min = 1000000000;
    for(let i = 0; i<n; i++){
        if(max < arrayA[i]){
            max = arrayA[i];
        }
        if(min > arrayA[i]){
            min = arrayA[i];
        }
    }

    console.log(min+ " "+ max);
}