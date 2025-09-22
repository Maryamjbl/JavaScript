function PrintTable(n) {
  for (let i = 1; i <= 20; i++) {
    let result = n * i;
    console.log(n + " x " + i + " = " + result);
  }
  console.log();
}
PrintTable(6);
PrintTable(18);
PrintTable(67);
PrintTable(21);
