const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const board = input.slice(1).map((v) => v.split("").map(Number));

var answer = [];

function solution(x, y, n) {
  var check_board = 0;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      check_board += board[i][j];
    }
  }
  if (check_board === 0) {
    answer.push("0");
  } else if (check_board === n * n) {
    answer.push("1");
  } else {
    // 새로운 그룹 시작할때 괄호 열어야함
    answer.push("(");
    solution(x, y, n / 2);
    solution(x, y + n / 2, n / 2);
    solution(x + n / 2, y, n / 2);
    solution(x + n / 2, y + n / 2, n / 2);
    answer.push(")");
  }
}

solution(0, 0, N);

console.log(answer.join(""));
