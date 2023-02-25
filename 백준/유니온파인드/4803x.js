const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function find(parent, node) {
  // 해당 노드의 부모가 자기 자신이 아니면 찐 부모를 찾는다. 그리고 그 값을 부모로 설정 ex. 1-2-3 > 3의 부모 1
  if (parent[node] != node) {
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
  }
}

let cnt = 0;
let parent;
let cycle;

while (true) {
  let [n, m] = input.shift().split(" ").map(Number);

  if (n == 0 && m == 0) {
    break;
  }

  // 자기 자신을 부모로 하는 arr 생성
  parent = [...new Array(n + 1)].map((_, i) => i);

  // 사이클 형성되는 노드 존재 시 저장할 빈 배열
  cycle = [];

  // 간선 갯수 만큼 for 문 반복
  for (let i = 0; i < m; i++) {
    let [from, to] = input.shift().split(" ").map(Number);
    // 각 노드의 부모 find
    let fromP = find(parent, from);
    let toP = find(parent, to);

    // 만약 부모가 다르면 두 노드 합침(union)
    if (fromP !== toP) {
      union(parent, from, to);
    } else {
      cycle.push(fromP);
    }
  }

  // 위에 들어온 간선들을 분석한 후 각 노드의 정확한 부모 노드를 알기위해 모든 노드 find 실행
  for (let i = 0; i < n + 1; i++) {
    find(parent, i);
  }

  let tree = [];

  for (let i = 0; i < cycle.length; i++) {
    tree.push(parent[cycle[i]]);
  }

  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    if (tree.includes(parent[i])) {
      continue;
    }
    answer += 1;
    tree.push(parent[i]);
  }

  cnt += 1;

  if (answer === 0) {
    console.log(`Case ${cnt}: No trees.`);
  } else if (answer === 1) {
    console.log(`Case ${cnt}: There is one tree.`);
  } else {
    console.log(`Case ${cnt}: A forest of ${answer} trees.`);
  }
}
