let n = 421;
console.log("Original Number = " + n);
let reverse = 0;
let remainder = 0;

let i = 1;
while (n > 0) {
  remainder = n % 10;
  reverse = reverse * 10 + remainder;
  n = Math.floor(n / 10);
  console.log("Loop Execution #" + i);
  console.log("Remainder = " + remainder);
  console.log("reverse = " + reverse);
  console.log("n = " + n);
  console.log();
  i++;
}

console.log("*** ________ *** _________");
console.log("Reverse = " + reverse);
