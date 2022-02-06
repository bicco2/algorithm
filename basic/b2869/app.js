const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
//그냥 여기서 split 해서 

solution(input[0], input[1], input[2]);

function solution(up, down, total) {// up = 2 down=1, total= 5
    let count = Math.ceil((total-up)/(up-down));
    console.log(count+1);
}