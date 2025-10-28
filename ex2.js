'use strict';

// מגיש: ליאון מברין

let num = 237;

//עובר על כל המספרים לפני 237
// ובודק אם הם ראשוניים, אם כן- מדפיס אותם
for (let i = 1; i < num; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i + ' ');
}
