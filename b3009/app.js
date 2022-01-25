const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arr1 = input[0].split(' ').map((item) => +item);
const arr2 = input[1].split(' ').map((item) => +item);
const arr3 = input[2].split(' ').map((item) => +item);


function solution(arr1, arr2, arr3){
    let loc =[];
    for(let i =0; i<2; i++){
        if(arr1[i] == arr2[i]){
            loc[i] = arr3[i];
        }
        if(arr3[i] == arr2[i]){
            loc[i] = arr1[i];
        }
        if(arr1[i] == arr3[i]){
            loc[i] = arr2[i];    
        }
    }
    console.log(`${loc[0]} ${loc[1]}`);
}

solution(arr1, arr2, arr3);

