let calls = 135;
let totalBill;

if (calls <= 100) {
  totalBill = 0;
} else {
  totalBill = (calls - 100) * 1;
}

console.log("Number of calls: " + calls);
console.log("Total Bill: " + totalBill + " Rs");
