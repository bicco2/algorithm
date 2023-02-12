const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const dp = new Array(+input + 1).fill(0);

// 바텀업 방식으로 들어온 값 까지 점점 올라간다.
// 즉 10을 예로 들면 -1, /2 , /3 을 진행하면 횟수가 +1 이 되고 그렇게 진행한 값 중 최소값인 것을 가져오면 바텀업을 통해 이미 그 수의 최소값을 알고 있을 것임
for (let i = 2; i <= +input; i++) {
  // -1
  dp[i] = dp[i - 1] + 1;
  // / 2
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  // / 3
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[+input]);
