const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const totArr = [];

function recur(arr, sum) {
  if (arr.length == 2) {
    totArr.push(sum);
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    // 해당 배열 요소 제외한 새로운 배열 생성
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    sum += arr[i - 1] * arr[i + 1];
    recur(newArr, sum);
    // 최대값이 아니면 돌아왔을 때 해당 값 제거
    sum -= arr[i - 1] * arr[i + 1];
  }
}

recur(input, 0);
console.log(Math.max(...totArr));
