let bill = [250, 450, 300, 150, 600];
let billTotal = bill.reduce((total, n) => total + n);
console.log(`Bill Total = ${billTotal}`);