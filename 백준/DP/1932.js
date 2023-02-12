const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
arr = arr.map((item) => item.split(" ").map((item) => +item));
const dp = [...new Array(n)].map((v) => new Array(3).fill(0));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (j === 0) {
      // 0이면 가장 왼쪽 줄
      arr[i][j] += arr[i - 1][0];
    } else if (j === arr[i].length - 1) {
      // 해당 줄의 가장 끝 인덱스
      arr[i][j] += arr[i - 1][j - 1];
    } else {
      // 둘 다 아니면 부모 노드로 올라가서 왼쪽 노드 오른쪽 노드 비교해야함
      arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    }
  }
}

console.log(Math.max(...arr[n - 1]));
