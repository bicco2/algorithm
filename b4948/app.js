const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let max = -1;

let cnt = 0;

for(let i =0; i < input.length; i++){
    if(max < +input[i]){
        max = +input[i];
    }
}

max = 2*max;

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


function result(x) {
    cnt = 0;
    for(let n = x+1; n<= x*2; n++){
        if(isPrimeNumber[n]) { 
            cnt++;
        }
    }
    console.log(cnt);

}

for(let y = 0; y< input.length; y++){
    
    if(+input[y]==0) {
        break;
    }
    result(+input[y]);
}
