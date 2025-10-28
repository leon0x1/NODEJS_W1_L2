'use strict';

// מגישים:
// ליאון מברין
// יאיל סאלם

let arr = [0, 5, 0, 2, 3, 0, 3, 11, 0];
let count = 0;

arr.forEach(element => {
  element === 0 ? count++ : (count = count);
});

console.log(count);


