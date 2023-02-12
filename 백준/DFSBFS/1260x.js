const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);

let arr = [...new Array(n + 1)].map((v) => []);

let dfsArr = [];
let bfsArr = [];

let visited = [...new Array(n + 1)].map((v) => false);

for (let i = 1; i <= m; i++) {
  let [node1, node2] = input[i].split(" ");
  arr[node1].push(+node2);
  arr[node2].push(+node1);
}

arr.forEach((item) => item.sort((a, b) => a - b));

function dfs(start) {
  visited[start] = true;
  dfsArr.push(start);
  for (let i = 0; i < arr[start].length; i++) {
    if (!visited[arr[start][i]]) {
      dfs(arr[start][i]);
    }
  }
}

function bfs(start) {
  let stack = [];
  stack.push(start);
  bfsArr.push(start);
  visited[start] = true;
  while (stack.length !== 0) {
    let next = stack.shift();
    for (let i = 0; i < arr[next].length; i++) {
      if (!visited[arr[next][i]]) {
        stack.push(arr[next][i]);
        visited[arr[next][i]] = true;
        bfsArr.push(arr[next][i]);
      }
    }
  }
}

dfs(v);

visited = visited.map((v) => false);

bfs(v);

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
