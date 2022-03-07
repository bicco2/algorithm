const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input.shift());
let numArr = input.map(x => +x);

const MAX_RANGE =10000;

solution(N,numArr);


function solution(N,numArr){
        
    let count = [];

    for(let i = 0; i < MAX_RANGE; i++){ //count 배열은 10,000으로 설정하고 문제 풀이 (숫자 범위)
        count[i] = 0;
    }

    for(let i = 0; i < N; i++){ //은 10으로 두고 풀기 (주어진 숫자 갯수임 ) //N
        count[numArr[i]-1]++; //다른 언어에서는 그냥 numArr를 인풋들어오는 걸로 바꾸고 하면 됨 
    }

    for(let i = 0; i < MAX_RANGE; i++){
        for(let j = 0; j < count[i]; j++){
            console.log(i+1);
        }
    }
}

// javascript로 풀 수 없음 메모리 초과 남