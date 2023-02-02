const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, row, col] = [...input];

let count = 0;
let result = 0;

function solution(x, y, n) {
  if (
    parseInt(row) >= x + n ||
    parseInt(row) < x ||
    parseInt(col) >= y + n ||
    parseInt(col) < y
  ) {
    count += n ** 2;
    return;
  }
  if (n === 2) {
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (i === parseInt(row) && j === parseInt(col)) {
          result = count;
          return;
        }
        count++;
      }
    }
  } else {
    solution(x, y, n / 2);
    solution(x, y + n / 2, n / 2);
    solution(x + n / 2, y, n / 2);
    solution(x + n / 2, y + n / 2, n / 2);
  }
}
solution(0, 0, 2 ** n);
console.log(result);
