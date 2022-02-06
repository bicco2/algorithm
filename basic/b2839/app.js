const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

solution(input);

function solution(input){
    let bag3 = 0;

    while(true){
        if(input%5 == 0){
            console.log(input/5 + bag3);
            break;
        }
        else if(input < 0){
            console.log(-1);
            break;
        }
        input -= 3;
        bag3++;
    }
}