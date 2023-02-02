const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const board = arr.map((string) => string.split(" ").map((i) => Number(i)));

var count_blue = 0;
var count_white = 0;

function solution(x, y, n) {
  var check_paper = 0;
  // 넘어온 x y 값을 기준으로 이중 for문을 돌려 사각형 확인
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      // 범위 내의 사각형 안의 원소들이 파란색 1 하얀색 0 으로 만약 모두 같은 색이면 n*n이나 0으로 확인 된다.
      check_paper += board[i][j];
    }
  }
  if (check_paper === 0) {
    count_white++;
  } else if (check_paper === n * n) {
    count_blue++;
  } else {
    // 만약에 같은 색깔로 이루어진 집단이 아니면 다시 4분할 시킴.
    solution(x, y, n / 2);
    solution(x + n / 2, y, n / 2);
    solution(x, y + n / 2, n / 2);
    solution(x + n / 2, y + n / 2, n / 2);
  }
}

solution(0, 0, n);

console.log(count_white);
console.log(count_blue);
