let percent = 29.67;
let grade = "";

if (percent >= 90) {
  grade = "A+";
} else if (percent >= 70) {
  grade = "A";
} else if (percent >= 50) grade = "B";
else {
  grade = "C";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);

let result = "";
if (grade == "A+") {
  result = "You Scored Distinction";
} else if (grade == "A") {
  result = "You Scored First Division";
} else if (grade == "B") {
  result = "You Scored Second Division";
} else if (grade == "C") {
  result = "You Failed!";
} else {
  result = "Invalid Grade";
}
console.log("Result: " + result);
