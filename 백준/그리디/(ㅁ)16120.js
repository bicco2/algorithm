const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let word = [...input];
let stack = [];

if (input === "PPAP" && input === "P") {
  console.log("PPAP");
} else {
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
    // 스택에 한 단어를 푸쉬하고 slice를 통해 뒤에 까지 짜른 뒤 join으로 문자열로 변환
    // js는 배열 비교가 잘 안되는 것 같다.
    let sliceArr = stack.slice(-4).join("");

    if ((sliceArr = "PPAP")) {
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }

  if (stack.toString() === "P") {
    console.log("PPAP");
  } else {
    console.log("NP");
  }
}
