const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


for (let i = 0; i >= 0; i++) {
    let arr0 = input[i].split(' ').map((item) => Math.pow(+item, 2));
    let arrN = [];
    if (arr0[0] == 0) {
        break;
    }

    arrN = insertionSort(arr0);

    if((arrN[0]+arrN[1]) == arrN[2]) {
        console.log("right");
    }
    else {
        console.log("wrong");
    }

}


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;
        while (left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            array[left] = cur;
            cur = array[left];
            left--;
        }
    }
    return array;
}


