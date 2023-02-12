const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let board = input.map((item) => item.split("").map(Number));

let dx = [0, 0, 1, -1];
let dy = [-1, 1, 0, 0];

let cnt = 0;
let answer = [];

// let visited = [...new Array(N)].map((v) => new Array(N).fill(false));

function dfs(x, y) {
  board[x][y] = 0;
  cnt++;
  for (let i = 0; i < 4; i++) {
    let X = x + dx[i];
    let Y = y + dy[i];
    if (X >= 0 && X < N && Y >= 0 && Y < N && board[X][Y] !== 0) {
      dfs(X, Y);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] == 1) {
      dfs(i, j);
      answer.push(cnt);
      cnt = 0;
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
