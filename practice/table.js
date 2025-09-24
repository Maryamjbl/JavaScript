function printTable(n) {
  for (let i = 1; i <= 30; i++) {
    let result = n * i;
    console.log(n + " x " + i + " = " + result);
  }
  console.log();
}
printTable(15);
printTable(30);
