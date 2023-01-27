const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let data = arr.map((item) => (item = item.split(" ")));

let flowerList = [];

for (let i = 0; i < data.length; i++) {
  flowerList.push([
    data[i][0] * 100 + parseInt(data[i][1]),
    data[i][2] * 100 + parseInt(data[i][3]),
  ]);
}

// 첫번쨰 요소로 정렬하고 같으면 두번쨰 요소로 정렬 둘다 내림차순임
flowerList.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let startDate = 301;
let endDate = 0;
let answer = 0;

while (flowerList) {
  if (startDate >= 1201 || startDate < flowerList[0][0]) {
    break;
  }

  var len = flowerList.length;

  for (let i = 0; i < len; i++) {
    if (startDate >= flowerList[0][0]) {
      // 현재 시작 날짜보다 꽃이 더 빨리피면 이어서 필 수 있으므로 통과
      if (endDate <= flowerList[0][1]) {
        // 현재 이어질 수 있는 꽃의 지는 날짜가 이전 것보다 더 늦게 지면 그걸로 교체
        endDate = flowerList[0][1];
      }
      flowerList.shift(); // 처음 비교 요소 즉 첫번째 배열을 삭제
    } else {
      // 현재 시작날짜보다 더 빨리 피는 꽃이 없으면 이어지지 않으므로 break로 빠져 나옴 . 이게 가능한 이유는 초반에 정렬로 해놨기때문에 첫 요소만 보면 된다.
      break;
    }
  }
  // for문 빠져나왔을 때 즉, 갱신이 되었을 수 있으므로 끝 날짜와 이을 수 있는 것을 기준으로 다시 찾아야하기 때문에 startdate 다시 설정
  startDate = endDate;
  answer++;
}

if (startDate < 1201) {
  console.log(0);
} else {
  console.log(answer);
}
