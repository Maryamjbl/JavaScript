//
for (let n = 5; n <= 10; n++) {
  console.log("Table of " + n);

  console.log();

  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + "x" + i + "=" + result);
  }
}
