const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...stair] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
stair = stair.map(Number);

const dp = new Array(n).fill(0);

dp[0] = stair[0];
dp[1] = stair[0] + stair[1];
dp[2] = Math.max(stair[0], stair[1]) + stair[2];

// 바텀업 방식으로 dp는 현재까지 누적된 점수를 말하고
// 3칸 전에서 하나 뛰고 연속 두개 밟는 경우의 수와 2칸 전에서 하나 뛰고 한개만 밟는 경우로 나눠서 계산한다.
// 무조건 한칸은 뛰어버리기 때문에 연속 3개를 밟는 경우의 수가 없음

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
}

console.log(dp[n - 1]);
