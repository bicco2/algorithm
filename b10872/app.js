let input = require('fs').readFileSync('/dev/stdin').toString();

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}

console.log(factorial(input));