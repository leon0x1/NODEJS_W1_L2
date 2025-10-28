'use strict';

// מגיש: ליאון מברין

let arr = [0, 5, 0, 2, 3, 0, 3, 11, 0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  arr[i] === 0 ? count++ : (count = count);
}

console.log(count);
