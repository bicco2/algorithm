const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const caseD = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(' ').map((item) => +item);
    caseD.push({ weight: tempValue[0], height: tempValue[1] });
}

solution(+input[0], caseD);

function solution(n, caseD){
    let cnt = [];

    for(let i = 0; i < n; i++){ //5번 돌아라 
        cnt[i] = 1;
       for(let j= 0; j<n; j++){
           
           if(i==j){
               continue;
           }
           if((caseD[i].weight < caseD[j].weight) && (caseD[i].height < caseD[j].height)){
               cnt[i]++;
           }
       }
    }
    console.log(cnt.join(" "));
}











// let cnt = 0;

// for(let i = 0; i < n; i++){ //5번 돌아라 
//    for(let j= 0; j<n; j++){
//        if(i==j){
//            continue;
//        }
//        if((caseD[i].weight > caseD[j].weight) && (caseD[i].height > caseD[j].height)){
//            cnt++;
//        }
//    }
//    console.log(cnt+1);
//    cnt = 0;
// }