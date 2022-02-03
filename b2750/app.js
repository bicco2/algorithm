const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input.shift());
let numArr = input.map(x => +x);

solution(numArr);


function solution(sortArr){
    
    for(let i = 1; i<sortArr.length; i++){ //0배열은 정렬되어있다고 가정하고 1인덱스 배열 부터 시작한다 따라서 i = 1이고 총 4번만 돌린다.
        let curIndex = i - 1;
        let currentNum = sortArr[i];

        while(curIndex >=0 && sortArr[curIndex] > currentNum){
            sortArr[curIndex + 1] = sortArr[curIndex];
            curIndex--;
        }

        sortArr[curIndex+1] = currentNum;
    }

    console.log(sortArr);
}


// const input = [5, 5, 2, 3, 4, 1];
// const N = input.shift();
// const sorted = input.sort((a, b) => a - b);
 z1
// for (let i = 0; i < N; i++) {
// console.log(sorted[i]);
// }
 