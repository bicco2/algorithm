const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = [...new Array(K + 1)].map((_) => new Array(N + 1).fill(1));

for (let i = 2; i <= K; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}

console.log(dp[K][N]);
