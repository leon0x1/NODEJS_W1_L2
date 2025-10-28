/*
שמות מגישים: 
יאיל סאלם
ליאון מברין
*/
const num = 7;

// Saving the boolean result of the division and casting it to a number
let divisionResult =
  Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) +
  Number(
    (num % 2 === 0 && num % 3 === 0) ||
      (num % 3 === 0 && num % 5 === 0) ||
      (num % 2 === 0 && num % 5 === 0)
  ) +
  Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0);

console.log(divisionResult);
