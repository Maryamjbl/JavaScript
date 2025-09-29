for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let j = 5; j >= 6 - i; j--) {
    line += j + " ";
  }
  console.log(line);
}
