const num = [4, 7, 12, 15, 9];
const modifiedNumbers = num.map(n => n % 2 == 0 ? n * 2 : n + 1);
console.log(modifiedNumbers);
