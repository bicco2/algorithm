const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());
let nArr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = Number(input.shift());
let targetArr = input.shift().split(" ").map(Number);

let answer = [...Array(m)].map((v) => 0);

for (let i = 0; i < m; i++) {
  let check = binarySearch(nArr, targetArr[i]);
  if (check === 1) {
    answer[i] = 1;
  }
}

console.log(answer.join(" "));

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle]) {
      high = middle - 1;
    } else if (target > arr[middle]) {
      low = middle + 1;
    } else {
      return 1;
    }
  }
  return 0;
}
