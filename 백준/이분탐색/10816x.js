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

// map 자료구조 처럼 해당 값의 갯수를 같이 나타내는 구조 선언
// [ [ -10, 2 ], [ 2, 1 ], [ 3, 2 ], [ 6, 1 ], [ 7, 1 ], [ 10, 3 ] ]
// 그리고 이분탐색과 같이 arr[0]을 비교하면서 그 값이 존재하면 arr[1] 즉, 해당 값의 갯수가 들어있는 값을 리턴함으로써 갯수 answer에 저장함

let newArr = [[nArr[0], 1]];

for (let i = 1; i < nArr.length; i++) {
  if (nArr[i - 1] === nArr[i]) {
    newArr[newArr.length - 1][1]++;
  } else {
    newArr.push([nArr[i], 1]);
  }
}

for (let i = 0; i < m; i++) {
  let check = binarySearch(newArr, targetArr[i]);
  answer[i] = check;
}

console.log(answer.join(" "));

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle][0]) {
      high = middle - 1;
    } else if (target > arr[middle][0]) {
      low = middle + 1;
    } else {
      // 그 수에 해당함
      return arr[middle][1];
    }
  }
  return 0;
}
