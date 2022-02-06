const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
let results = '';
input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));
console.log(results);

//(a,b) => (a-b)의미 : a,b는 함수(1,2,3) 이 있을 때 b에 2가 들어가고 a에 1이 들어가서 a-b했을 떄  b가 더 크게 된다면 음수가 나와서 변형이 일어나 젤 큰 것들이 앞으로 오게된다.
let results = " ";
input.sort((a,b)=> a-b).forEach(num => (results += `${num}\n`));