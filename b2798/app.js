const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(n, num, arr) {
    let max = 0;
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            for(let z = 0; z<n; z++){
                let sum = 0;
                if(i == z || j == z || i == j){

                }
                else{
                    sum = arr[i] + arr[j] + arr[z];
                    if(sum > max && sum <= num){
                        max = sum;
                    }
                }
            }
        }
    }

    console.log(max);
}