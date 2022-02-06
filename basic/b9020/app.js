const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let max = 123456*2;

let isPrimeNumber = Array(max + 1).fill(true); // 0부터 M까지 true로 채운배열
isPrimeNumber[0] = isPrimeNumber[1] = false; // 0 과 1은 소수가 아니므로 false로 바꿔준다.

for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    if(isPrimeNumber[i]) {
      let m = 2; // 배수들을 구하기위해 곱해줄 수.
      while(i * m <= max) { 
        isPrimeNumber[i * m] = false; // i의 배수들을 false로 바꾼다.
        m++;  // i * m은 초기에 2 * 2 이고 m++ 해줌으로써 i + m은 2 * 3으로 바뀐다.
      }
    }
  }


let gap = [];

function result(x) {
    let initVal = x; 
    for(x; x >= initVal/2; x--){
        if(isPrimeNumber[x]) { 
            if(isPrimeNumber[initVal-x]){
                gap.push(initVal-x, x);
                // break;
            }
        }
       
    }
    // console.log((gap.pop()) gap.pop());
    console.log(gap[gap.length-2]+" "+gap[gap.length-1]);
    gap = [];
}

for(let y = 1; y<= +input[0]; y++){
    result(+input[y]);
}
