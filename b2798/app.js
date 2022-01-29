const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(n, num, arr) {
    let max = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
          for(let k = 0; k < n; k++) {
            // 동일한 카드를 선택 할 수는 없기 때문에 아래 조건의 경우 다음 loop로 넘어간다.
            if(i == j || i == k || j == k) {
              continue;
            }
       
            // 서로 다른 카드가 선택된 경우 M을 초과하지 않는 최대값인지 확인 후 저장한다.
            const sum = arr[i] + arr[j] + arr[k]
            if(sum > max && sum <= num) {
              max = sum
            }
       
            // 규칙에 맞는 숫자가 나온 경우에 더이상 계산을 할 필요가 없기 떄문에 종료한다.
            if(max == num) {
              break;
            }
          }
        }
      }
      console.log(max);
}