const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const N = +input[0][0];
const B = +input[0][1];
const MRTX = input.splice(1).map((v) => v.map((x) => +x % 1000));

// 행렬의 곱셈 구하는 함수
function makeNewMrtx(n, mtrx1, mtrx2) {
  // 행렬 길이만큼 0으로 빈배열 만들고
  let newMtrx = Array.from(Array(N), () => [...new Array(N)].map((i) => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // i, j 즉 행과 열을 돌면서
      for (let z = 0; z < n; z++) {
        // 행렬 곱셈 공식에 따라 행 고정 * 열 고정 값을 더함
        newMtrx[i][j] += mtrx1[i][z] * mtrx2[z][j];
      }
      newMtrx[i][j] %= 1000;
    }
  }
  return newMtrx;
}

// 1629에서 half로 한 것과 달리 얘는 행렬을 뱉어야한다. 따라서 half를 다차원 배열로 바꿔서 풀면됨

function solution(n, b, mtrx) {
  // 1 제곱이면 그대로 출력 (더 할 거 없음)
  if (b == 1) {
    return mtrx;
  } else if (b == 2) {
    // 2 제곱이면 해당 행렬의 곱셈 한번만 하면 되니까 함수 실행 1번으로 끝
    return makeNewMrtx(n, mtrx, mtrx);
  } else {
    // 그 이상인 경우
    // 해당 행렬의 제곱을 반으로 쪼개고 solution 재귀 즉 , b가 1이나 2가 나올때까지 반으로 쪼갠다
    // 만약 1,2 로 새로운 mtrx이 리턴되면 그때 half에 값이 할당되고 아래 if문으로 들어감

    // 1,2 로 리턴 받은 값인 half를 짝수 제곱근과 홀수 제곱근의 경우를 나눠 행렬 곱셈을 통해 새로운 배열을 반환하고
    // 마지막에서 두번째로 재귀한 solution이 다시 half에 배열을 할당시켜 똑같은 로직 반복.
    if (b % 2 == 0) {
      const half = solution(n, parseInt(b / 2), mtrx);
      return makeNewMrtx(n, half, half);
    }
    // 홀수 일때는 -1 해서 짝수로 만들어주고 그 배열과 원본 배열의 행렬 곱셈을 한번 진행해서 만들어 준다.
    else {
      const half = solution(n, b - 1, mtrx);
      return makeNewMrtx(n, half, mtrx);
    }
  }
}

const result = solution(N, B, MRTX);

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" "));

// const N = +input[0][0];
// const B = +input[0][1];
// const MRTX = input.splice(1).map((v) => v.map((x) => +x % 1000));

// // 행렬의 곱셈 구하는 함수
// function makeNewMrtx(n, mtrx1, mtrx2) {
//   // 행렬 길이만큼 0으로 빈배열 만들고
//   let newMtrx = Array.from(Array(N), () => [...new Array(N)].map((i) => 0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // i, j 즉 행과 열을 돌면서
//       for (let z = 0; z < n; z++) {
//         // 행렬 곱셈 공식에 따라 행 고정 * 열 고정 값을 더함
//         newMtrx[i][j] += mtrx1[i][z] * mtrx2[z][j];
//       }
//       newMtrx[i][j] %= 1000;
//     }
//   }
//   return newMtrx;
// }

// // 1629에서 half로 한 것과 달리 얘는 행렬을 뱉어야한다. 따라서 half를 다차원 배열로 바꿔서 풀면됨

// function solution(n, b, mtrx) {
//   // 1 제곱이면 그대로 출력 (더 할 거 없음)
//   if (b == 1) {
//     return mtrx;
//   } else if (b == 2) {
//     // 2 제곱이면 해당 행렬의 곱셈 한번만 하면 되니까 함수 실행 1번으로 끝
//     return makeNewMrtx(n, mtrx, mtrx);
//   } else {
//     // 그 이상인 경우
//     // 해당 행렬의 제곱을 반으로 쪼개고 solution 재귀 즉 , b가 1이나 2가 나올때까지 반으로 쪼갠다
//     // 만약 1,2 로 새로운 mtrx이 리턴되면 그때 half에 값이 할당되고 아래 if문으로 들어감
//     const half = solution(n, parseInt(b / 2), mtrx);
//     // 1,2 로 리턴 받은 값인 half를 짝수 제곱근과 홀수 제곱근의 경우를 나눠 행렬 곱셈을 통해 새로운 배열을 반환하고
//     // 마지막에서 두번째로 재귀한 solution이 다시 half에 배열을 할당시켜 똑같은 로직 반복.
//     if (b % 2 == 0) {
//       // ex 10**4 >> 10**2, 10**2 로 두개의 행렬을 넘기면 되지만 홀수 일땐
//       return makeNewMrtx(n, half, half);
//     }
//     // ex 10**5 >> 10**2 x 10**2 x 10(원본) 세가지가 필요함으로 현재 만들어 놓은 함수로 로직을 못이어나감
//     // 따라서 10**2 10**2를 미리 한번해서 합친 행렬과 원본을 실행하는 방식으로 진행
//     return makeNewMrtx(n, makeNewMrtx(n, half, half), mtrx);
//   }
// }

// const result = solution(N, B, MRTX);

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i].join(" "));
// }
