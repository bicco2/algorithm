const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input.slice(1));

function solution(n, wordArr){
    for(let i = 0; i < n; i++){
        const word = wordArr[i];// happy
        const letter = [];
        let being = true;
        console.log(word.indexOf('h'));
        for (let j = 0; j < word.length; j++) { // happy = 5
            if (letter.indexOf(word[j]) === -1) {
              letter.push(word[j]);
            } else {
              if (letter.indexOf(word[j]) !== letter.length - 1) {
                being = false;
                break;
              }
            }
          }

    }
}