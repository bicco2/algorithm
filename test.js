const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function dijkstra(start, graph, distance) {
  const queue = [];
  queue.push([0, start]);
  distance[start] = 0;

  while (queue.length > 0) {
    const [dist, now] = queue.shift();

    if (dist > distance[now]) {
      continue;
    }

    for (const node of graph[now]) {
      const cost = dist + node[0];
      if (cost < distance[node[1]]) {
        distance[node[1]] = cost;
        queue.push([cost, node[1]]);
      }
    }
  }

  return distance;
}

const t = Number(input());

for (let i = 0; i < t; i++) {
  const [n, d, c] = input()
    .split(" ")
    .map((v) => parseInt(v));

  const graph = Array.from(Array(n + 1), () => Array(0));
  for (let j = 0; j < d; j++) {
    const [a, b, s] = input()
      .split(" ")
      .map((v) => parseInt(v));

    graph[b].push([s, a]);
  }

  const distance = Array(n + 1).fill(Infinity);

  const result = dijkstra(c, graph, distance);

  let count = 0;
  let time = 0;
  result.forEach((v) => {
    if (v !== Infinity) {
      count += 1;

      if (time < v) {
        time = v;
      }
    }
  });

  console.log(count, time);
}
