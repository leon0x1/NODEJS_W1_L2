/*
שמות מגישים: 
יאיל סאלם
ליאון מברין
*/
let isPrime = true;

for (let i = 2; i < 237; i++) {
  // Checkng if there are any numbers (besides 1 and the value of i) that i can divide by
  for (let j = 2; j < i; j++) if (i % j === 0) isPrime = false;

  if (isPrime) console.log(i);

  isPrime = true;
}
