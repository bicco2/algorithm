const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  //console.log(input[2]);

  solution(input);
  process.exit();
});


function solution(input){
  //console.log(input);

  let checkFirst = parseInt(input[parseInt(input[0])+1]); //3

  
  let checkMid = parseInt(input[0])+1; //5


  let checkLast = checkMid + checkFirst; // 8

  let result = [];

  let words = [];
  let checkWords = [];

  for(let i = 1; i <= input[0]; i++){ //ex 1~4
      words.push(input[i]);
  }



  for(let j = checkMid+1; j<= checkLast; j++){ //검사할 단어 조각 갯수 6~8
      checkWords.push(input[j]);
  }

  for(let x = 0; x<checkWords.length; x++){
    let checkNum = 0;
      for(let y = 0; y < words.length; y++){
         if(words[y].includes(checkWords[x])){
            checkNum++;
           // console.log(checkNum);
         } 
      }
      result.push(checkNum);
  }

  for(let i = 0; i< result.length; i++){
    console.log(result);
  }


}
