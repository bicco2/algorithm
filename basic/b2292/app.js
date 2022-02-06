const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

solution(+input);

function solution(input){
    let X = input;
    let groupCounter = 0;
     
    const a = [];
    const b = [];
    
    while(X > 0){ 
         groupCounter ++; 
      X = X - groupCounter;
    }
    // console.log(X, groupCounter)
    
    for(let i=0; i < groupCounter; i++){
      a.push(i+1);
      b.push(groupCounter-i);
    }
    
    if(groupCounter % 2 === 0){
      console.log(`${a[X+groupCounter-1]}/${a[X+groupCounter-1]}`)
    } else {
      console.log(`${b[X+groupCounter-1]}/${b[X+groupCounter-1]}`)
    }
}