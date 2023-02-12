const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [subin, brother] = fs.readFileSync(filePath).toString().trim().split(" ");
const visited = Array.from({ length: 100100 }, () => 0);
let stack = [];

let cnt = 0;

stack.push([+subin, 0]);
visited[+subin] = 1;

while (stack.length) {
  cnt++;

  let [newSubin, time] = stack.shift();
  if (newSubin === +brother) {
    console.log(time);
    break;
  }

  for (const next of [newSubin - 1, newSubin + 1, newSubin * 2]) {
    if (!visited[next] && next >= 0 && next <= 100000) {
      visited[next] = 1;
      stack.push([next, time + 1]);
    }
  }
}
