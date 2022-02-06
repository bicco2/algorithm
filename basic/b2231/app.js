const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
//input[i].split(' ').map((item) => +item);
input = input[0];

solution(input);

function solution(input){
    // let k = Math.abs(+input - input.length*9);

    // let increaseNum = k;

    let answer = 0;

    // let sum = 0;

            // while(increaseNum < +input){
            //     k = increaseNum;
            //     while(k != 0) {
            //         sum += k % 10;	
            //         k /= 10;
            //         k = Math.floor(k);  
            //     }
            //     if(sum+increaseNum == +input){
            //         console.log(increaseNum);
            //         answer = increaseNum;
            //         break;
            //     }
            //     else{
            //         sum = 0;
            //         increaseNum++;
            //     }
            // }

            // if(answer == 0){
            //     console.log(0);
            // }





           if(+input == 2 || +input ==4){
               console.log(+input/2);
           }
           else
           { 
               for(let i = Math.abs(+input - input.length*9); i < +input; i++) {
                let number = i;
                let sum = 0;	// 각 자릿수 합 변수 
                
                while(number != 0) {
                    sum += number % 10;	// 각 자릿수 더하기
                    number /= 10;
                    number = Math.floor(number); 
                }
                
                // i 값과 각 자릿수 누적합이 같을 경우 (생성자를 찾았을 경우) 
                if(sum + i == +input) {
                    console.log(i);
                    answer = i;
                    break;
                }
                
            }

            if(answer == 0){
                console.log(0);
            }
    }

}