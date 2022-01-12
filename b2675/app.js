const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let rsArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const inputRS = input[i];
    const splitedInputRS = inputRS.split(' ');
    rsArray.push({
        R: +splitedInputRS[0],
        S: splitedInputRS[1],
    });
}

solution(+input[0], rsArray);

function solution(n, rsArray){

    for(let i = 0; i<n; i++){
        var arrayRepeat = [];
        rsArray[i].R; //3
        for(let j = 0; j < rsArray[i].S.length; j++){
            for(let k = 0; k < rsArray[i].R; k++){
               arrayRepeat += rsArray[i].S[j];
            }

            
        }
        console.log(arrayRepeat);
    }
  
}