const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, atk] = input.split(" ").map((v) => +v);

atk = BigInt(atk);
let start = BigInt(0);
let end = BigInt(123456000000);

let answer = Infinity;
let mid;

while (start <= end) {
  mid = (start + end) / BigInt(2);

  let hp = mid;

  let check = true;

  for (let i = 0; i < arr.length; i++) {
    let [t, a, h] = arr[i].split(" ");
    a = BigInt(a);
    h = BigInt(h);
    switch (t) {
      case 1:
        let hitNum = BigInt(h / atk);
        if (hitNum * atk < h) {
          hitNum += BigInt(1);
        }
        hp -= (hitNum - BigInt(1)) * a;
        break;
      case 2:
        hp += h;
        if (hp > mid) {
          hp = mid;
        }
        atk + a;
        break;
    }
    if (hp <= BigInt(0)) {
      check = false;
    }
  }

  if (check) {
    end = mid - BigInt(1);
    answer = mid;
  } else {
    start = mid + BigInt(1);
  }
}

console.log(String(answer));
