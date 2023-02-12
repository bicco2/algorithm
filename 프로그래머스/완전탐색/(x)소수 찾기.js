function solution(numbers) {
  var answer = [];
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function numberCombination(arr, current_num) {
    // 배열 길이만큼 돌림 즉, 배열에 한개도 안남을때까지 
    for (let i = 0; i < arr.length; i++) {
      // for문 돌면서 붙여진 숫자에 현재 들어온 숫자를 합침 
      var new_num = current_num + arr[i];
      // for문이 끝나지 않을때 까지는 arr배열이 수정되면 안되기때문에 추가된 숫자를 제외한 새로운 배열 생성  
      var copy_arr = [...arr];
      copy_arr.splice(i, 1);
      // 새로운 조합의 숫자가 소수이고 아직 없는 소수이면 추가
      if (isPrime(+new_num) && !answer.includes(+new_num)) {
        answer.push(+new_num);
      }
      // 그리고 나서 재귀를 통해 진행 
      numberCombination(copy_arr, new_num);
    }
  }

  numberCombination([...numbers], "");

  return answer.length;
}
