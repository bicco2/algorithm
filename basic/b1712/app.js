const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
//그냥 여기서 split 해서 

solution(input[0], input[1], input[2]);

function solution(fixCost, cost, price) {// a:1000 b:70 c:170
    
    let sell = 0;


    const res1 = fixCost + (cost * 1) - (price * 1);
    const res2 = fixCost + (cost * 2) - (price * 2);
    
    if(fixCost > 2000000){
        const margin = price - cost;
        const count = Math.floor(fixCost / margin) + 1
        
        console.log(margin <= 0 ? -1 : count);
    }
    else{
        if(res1 > res2){
            while(true){   
                if(fixCost + (cost * sell) < (price * sell)){
                    break;
                }
                else{
                    sell++;
                }
            }
            console.log(sell);
        }
        else{
            console.log(-1);
        }
    }
   



}