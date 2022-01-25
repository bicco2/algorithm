const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const radius = Number(input);
const euc = radius * radius * Math.PI;
const texi = ((radius * 2) * radius * 0.5 )* 2;

console.log(euc.toFixed(6));
console.log(texi.toFixed(6));