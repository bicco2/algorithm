const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputData = input[1].split(' ').map((item) => +item);

solution(+input[0], inputData);

function solution(n, Arr){
    let sum = 0;
    let max = -100000;
    Arr.forEach( x => {
        if(max < x){
            max = x;
        }
    });


    Arr.forEach( x => {
 
            let reX = x/max*100;
            sum += reX;
        
    });

    console.log(sum/n);
}