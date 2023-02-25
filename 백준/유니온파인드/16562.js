const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function find(parent, node) {
  // 해당 노드의 부모가 자기 자신이 아니면 찐 부모를 찾는다. 그리고 그 값을 부모로 설정 ex. 1-2-3 > 3의 부모 1
  if (parent[node] != node) {
    // 이거 안해줘도 되는 이유 : 어차피 union 할때 3개 이상 연결된거 안들어옴, 즉 계속 최솟값으로 갱신이 되기 떄문에 union에서만 최솟값 갱신해주면 됨
    // if (arr[parent[x]] > arr[x]) {
    //   arr[parent[x]] = arr[x];
    // } else {
    //   arr[x] = arr[parent[x]];
    // }
    parent[node] = find(parent, parent[node]);
  }
  return parent[node];
}

function union(parent, from, to) {
  // 들어온 간선의 찐부모를 찾아 값에 할당한다.
  let fromP = find(parent, from);
  let toP = find(parent, to);

  // 만약 두 값의 부모 값이 다르면 두 노드를 연결하기 위해 값을 재할당한다. (작은 것이 부모가 되도록 함)
  if (fromP != toP) {
    if (fromP > toP) {
      parent[fromP] = toP;
    } else {
      parent[toP] = fromP;
    }
    if (arr[fromP] > arr[toP]) {
      arr[fromP] = arr[toP];
    } else {
      arr[toP] = arr[fromP];
    }
  }
}

let [n, m, k] = input.shift().split(" ").map(Number);
let arr = [0, ...input.shift().split(" ").map(Number)];

let parent = [...new Array(n + 1)].map((_, i) => i);

for (let i = 0; i < m; i++) {
  let [from, to] = input.shift().split(" ").map(Number);
  // 각 노드의 부모 find
  let fromP = find(parent, from);
  let toP = find(parent, to);

  // 만약 부모가 다르면 두 노드 합침(union)
  if (fromP !== toP) {
    union(parent, from, to);
  }
}

for (let i = 0; i < n + 1; i++) {
  find(parent, i);
}

let tree = [];

let answer = 0;

for (let i = 1; i < n + 1; i++) {
  if (tree.includes(parent[i])) {
    continue;
  }
  answer += arr[parent[i]];
  tree.push(parent[i]);
}

if (answer <= k) {
  console.log(answer);
} else {
  console.log("Oh no");
}
