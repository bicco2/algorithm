const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');
const [a,b] = input;

solution(a,b);

function solution(a,b){
    let arr1= [];
    let arr2 = [];
    for(let i = 2; i >= 0; i--){
       arr1 += a[i];
       arr2 += b[i];
    }

    if(+arr1 > + arr2){
        console.log(+arr1);
    }
    else 
        console.log(+arr2);
}