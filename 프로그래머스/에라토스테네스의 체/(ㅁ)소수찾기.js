function solution(n) {
  var answer = [...new Array(n + 1)].map((_, i) => i);
  // n개 만큼 인덱스로 초기화 시킴 ex. n = 10 > 0,1,2,3,4,5,6,,,10
  // 그리고 소수가 아닌 것들은 0으로 재할당 시킴
  // 따라서 0, 1은 소수가 아님으로 초기에 0으로 할당
  answer[1] = 0;

  for (let i = 2; i <= n; i++) {
    // for으로 해당 숫자까지 돌림 1~10까지
    if (answer[i] === 0) {
      // 0이면 이미 소수가 아닌 걸로 판별됐으므로 넘김
      continue;
    }

    for (let j = i + i; j <= n; j += i) {
      //그리고 그 숫자의 배수들은 처음 숫자를 2번 곱하면 약수가 생기니 제외하는 로직
      answer[j] = 0;
    }
  }

  var cnt = 0;

  answer.forEach((item) => {
    if (item !== 0) {
      cnt += 1;
    }
  });

  return cnt;
}
