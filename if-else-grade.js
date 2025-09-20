let percent = 95.67;
let grade = "";

if (percent >= 90) {
  grade = "A+";
} else if (percent >= 70) {
  grade = "A";
} else if (percent >= 50) grade = "B";
else {
  grade = "D";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);
