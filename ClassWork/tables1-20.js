//  printing tables
for (let n = 1; n <= 20; n++) {
  console.log("Table of " + n);
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + "x" + i + "=" + result);
    console.log();
  }
}
