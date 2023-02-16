const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input.split(" ").map((v) => +v);
arr = arr.map((v) => parseInt(v, 10));

let start = 0;

let end = Math.min(...arr) * n;

let answer = 0;
let mid;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  let taken = arr.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

  if (mid === end) {
    console.log(end);
    return;
  }

  if (taken < n) {
    start = mid + 1;
  } else {
    end = mid;
    answer = mid;
  }
}

console.log(answer);
