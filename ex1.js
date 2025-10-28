'use strict';

// מגישים:
// ליאון מברין
// יאיל סאלם

const n = 30;

let flag1 = n % 2 === 0 || n % 3 === 0 || n % 5 === 0;

let flag2 =
  (n % 2 === 0 && n % 3 === 0) ||
  (n % 3 === 0 && n % 5 === 0) ||
  (n % 2 === 0 && n % 5 === 0);

let flag3 = n % 2 === 0 && n % 3 === 0 && n % 5 === 0;

console.log(Number(flag1) + Number(flag2) + Number(flag3));

