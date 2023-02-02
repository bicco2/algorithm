const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let [a, b, c] = [...input];

function solution(pow) {
  if (pow === 1n) {
    return a % c;
  }

  // BigInt는 BigInt 끼리만 연산 가능 (숫자뒤에 n)
  const half = solution(pow / 2n);

  if (pow % 2n) {
    return (half * half * (a % c)) % c;
  }
  return (half * half) % c;
}

console.log(solution(b).toString());
