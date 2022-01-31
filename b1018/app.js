const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let location = input[0].split(' ').map((item) => +item);
let arrM =[];

for(let i =1; i<=location[0]; i++){
    arrM[i-1] =input[i];
}

let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let lastX = (location[0]-8);
let lastY = (location[1]-8);


let answer = 90;

for (let i = 0; i <= lastX; i++) {//2까지
  for (let j = 0; j <= lastY; j++) {//5까지
 
    check(i,j); //(5,2)까지 들어감 
  }
}

function check(x, y) { //(5,2) 까지 들아가고
  let checkWhite = 0;
  let checkBlack = 0;
 //x는 0~5까지 y는 0~2까지
  for (let i = x; i < x + 8; i++) { //i는 2~10
    for (let j = y; j < y + 8; j++) {      //j는 5~13까지 뭔 개소리야 시발 
      if (arrM[i][j] !== white[i-x][j-y])
        checkWhite++;
      if (arrM[i][j] !== black[i-x][j-y])
        checkBlack++;
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;
  
  if (min < answer)
    answer = min;
}

console.log(answer);


