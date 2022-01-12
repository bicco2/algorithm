const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0],input[1]);


function solution(h , m){
    if(m < 45){
        if(h == 0){
            console.log(23, 60 -(45 - m));
        }
        else 
            console.log(h-1, 60 -(45 - m));
    }
    else
        console.log(h, m- 45);

}