const numArray = [1, 2, 3, 5, 0, 6, 7, 0, 8, 9, 0];

let zeroCount = 0;

for (let i = 0; i < numArray.length; i++) {
  numArray[i] === 0 ? zeroCount++ : (zeroCount += 0);
}

console.log(zeroCount);
