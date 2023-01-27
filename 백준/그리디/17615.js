const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 일단 시작점과 끝점에 있는 공의 연속된 색깔과 숫자를 구함
// 2. 그 공을 제외하고 남은 공의 갯수를 카운트
// 3. 똑같이 끝점에서 있는 공의 연속된 색깔과 숫자를 구함
// 4. 똑같이 카운트
// 5. 둘이 비교해서 작은 것 리턴

let total = input[0];
let ballArr = [...input[1]];
let redBall = 0;
let blueBall = 0;

let start_ball = ballArr[0];
let end_ball = ballArr[total - 1];

// 배열 내에 빨간 볼이랑 파란볼이 몇개씩 있는지 확인
ballArr.forEach((item) => {
  item === "R" ? redBall++ : blueBall++;
});

// 만약에 최적의 경우의 수가 없으면 둘중 작은 볼의 갯수만큼 옮겨야하니까 초기값으로 세팅
let answer = [Math.min(redBall, blueBall)];

let cnt_ball = 0;

// 시작점에 있는 볼의 색깔은 일단 뒤로 하고 몇개있는지 구함
for (let i = 0; i < total; i++) {
  if (ballArr[i] != start_ball) {
    break;
  } else cnt_ball++;
}

if (start_ball === "R") {
  answer.push(Math.min(redBall - cnt_ball, blueBall));
} else {
  answer.push(Math.min(redBall, blueBall - cnt_ball));
}

cnt_ball = 0;

// 똑같이 끝에서 시작한 볼의 갯수를 구함
for (let i = total - 1; i >= 0; i--) {
  if (ballArr[i] != end_ball) {
    break;
  } else cnt_ball++;
}

if (end_ball === "R") {
  answer.push(Math.min(redBall - cnt_ball, blueBall));
} else {
  answer.push(Math.min(redBall, blueBall - cnt_ball));
}

console.log(Math.min(...answer));
