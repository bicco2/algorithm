const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result = [];

if (input > 1022) {
  console.log(-1);
} else {
  for (let i = 0; i < 10; i++) {
    // 맨 앞자리 숫자 기준으로 돌려줌
    dfs(i, 1);
  }
  result.sort((a, b) => a - b);
  console.log(result[input]);
}

function dfs(number, index) {
  if (index > 11) return;
  result.push(number);

  for (let i = 0; i < number % 10; i++) {
    // 1의 자릿수만큼 아래로 더 뻗어나갈 수 있음 ex. 32 면 320 321 두개로 2번 가능
    dfs(number * 10 + i, index + 1);
    // 끝나는 포인트에 뭐가 없는 이유는 이 문제 자체가 배열에 추가하는 것이고 애초에 for에서 걸러짐
  }
}
