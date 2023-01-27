const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  let stack = [];
  let count = 0;
  let currentInput = input[i];

  if (currentInput.includes("-")) {
    break;
  }

  for (let j = 0; j < currentInput.length; j++) {
    if (currentInput[j] === "}" && stack.length === 0) {
      count++;
      stack.push("}");
    } else if (currentInput[j] === "}" && stack.length !== 0) {
      stack.pop();
    } else {
      stack.push("{");
    }
  }

  count += parseInt(stack.length / 2);
  answer.push(count);
}

answer.forEach((item, idx) => {
  console.log(`${idx + 1}. ${item}`);
});
