const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...rgbArr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
rgbArr = rgbArr.map((item) => item.split(" ").map((item) => +item));
const dp = [...new Array(n)].map((v) => new Array(3).fill(0));
// 이차원 배열임 각각  n번째 집에 어떤 색을 칠했는지 나타냄

dp[0] = rgbArr[0];

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgbArr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgbArr[i][1];
  dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + rgbArr[i][2];
}

console.log(Math.min(...dp[n - 1]));
