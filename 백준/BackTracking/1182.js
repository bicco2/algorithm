const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, s] = input.shift().split(" ").map(Number);
let arr = input.shift().split(" ").map(Number);

let cnt = 0;

function bt(index, sum) {
  if (index === n) {
    return;
  }
  // 현재 sum에 다음 값을 더 한다.
  sum += arr[index];
  // 그 값이 s와 같으면 경우의 수가 하나 존재함으로 + 해준다.
  if (sum === s) {
    cnt++;
  }
  // 더한 경우 와 다음 인덱스에 해당하는 값을 비교하기 위한 재귀
  bt(index + 1, sum);
  // 더하지 않고 다음 인덱스에 해당하는 값을 비교하기 위한 재귀
  bt(index + 1, sum - arr[index]);
}

bt(0, 0);

console.log(cnt);
