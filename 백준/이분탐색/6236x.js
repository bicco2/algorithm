const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.split(" ").map((v) => +v);
arr = arr.map((v) => +v);

let k = 0;

// 최소값 max으로 설정
let start = Math.max(...arr);
// 최대값은 sum으로 설정
let end = arr.reduce((acc, cur) => acc + cur, 0);

//이분 탐색으로 while 루프 돌림
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  // 현재 돈
  let currentMoney = mid;
  // 인출한 횟수
  let count = 1;
  //하루에 사용할 돈 for문으로 돌면서
  for (let price of arr) {
    // 현재 가지고 있는 돈이 오늘 사용할 돈 보다 적으면 그 돈 다시 넣고 재인출(+ 인출횟수가 늘어남)
    if (currentMoney - price < 0) {
      currentMoney = mid;
      count += 1;
    }
    // 현재 가지고 있는 돈이 오늘 사용하고도 충분하다면 인출하지않고 사용
    currentMoney -= price;
  }
  // 그렇게 현재 설정된 k(즉 mid)를 가지고 for문을 돌았을 떄 인출 횟수가 m보다 많으면 너무 작은 금액으로 start 갱신
  if (count > +m) {
    start = mid + 1;
  }
  // 너무 크면 end 갱신으로 최적 값 찾아나감
  else {
    end = mid - 1;
    k = mid;
  }
}

console.log(k);
