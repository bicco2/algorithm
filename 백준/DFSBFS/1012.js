const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input.shift());

let board;
let m, n, k;
let answer = [];

for (let t = 0; t < total; t++) {
  let cnt = 0;
  [m, n, k] = input.shift().split(" ").map(Number);

  board = [...new Array(n)].map((_) => new Array(m).fill(0));

  for (let i = 0; i < k; i++) {
    //   가로(y)  세로(x)
    let [mNode, nNode] = input.shift().split(" ").map(Number);
    board[nNode][mNode] = 1;
  }

  for (let i = 0; i < n; i++) {
    // 8
    for (let j = 0; j < m; j++) {
      // 10
      if (board[i][j] == 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }

  answer.push(cnt);
}

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

function dfs(x, y) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  board[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    let X = x + dx[i];
    let Y = y + dy[i];

    if (X >= 0 && X < n && Y >= 0 && Y < m && board[X][Y] !== 0) {
      dfs(X, Y);
    }
  }
}

// BFS
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const total = Number(input.shift());

// let board;
// let m, n, k;
// let answer = [];

// for (let t = 0; t < total; t++) {
//   let cnt = 0;
//   [m, n, k] = input.shift().split(" ").map(Number);

//   board = [...new Array(n)].map((_) => new Array(m).fill(0));

//   for (let i = 0; i < k; i++) {
//     //   가로(y)  세로(x)
//     let [mNode, nNode] = input.shift().split(" ").map(Number);
//     board[nNode][mNode] = 1;
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (board[i][j] == 1) {
//         bfs(i, j);
//         cnt++;
//       }
//     }
//   }

//   answer.push(cnt);
// }

// for (let i = 0; i < answer.length; i++) {
//   console.log(answer[i]);
// }

// function bfs(x, y) {
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];

//   board[x][y] = 0;

//   let queue = [[x, y]];

//   while (queue.length !== 0) {
//     const [newX, newY] = queue.shift();

//     board[newX][newY] = 0;

//     for (let i = 0; i < 4; i++) {
//       let X = newX + dx[i];
//       let Y = newY + dy[i];

//       if (X >= 0 && X < n && Y >= 0 && Y < m && board[X][Y] !== 0) {
//         board[X][Y] = 0;
//         queue.push([X, Y]);
//       }
//     }
//   }
// }
