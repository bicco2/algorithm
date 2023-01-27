const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const totArr = [];

function dfs(sum, array) {
  if (array.length === 2) {
    totArr.push(sum);
    return;
  }

  for (let i = 1; i < array.length - 1; i++) {
    let newArr = [...array.slice(0, i), ...array.slice(i + 1)];
    sum += array[i - 1] * array[i + 1];
    dfs(sum, newArr);
    sum -= array[i - 1] * array[i + 1];
  }
}

dfs(0, input);

console.log(Math.max(...totArr));
