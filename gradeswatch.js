let percent = 68;
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

switch (grade) {
  case "A+":
    result = " You Scored Distinction";
    break;

  case "A":
    result = " You Scored First Class";
    break;

  case "B":
    result = " You Scored Second Class";
    break;

  case "C":
    result = " You Failed";
    break;

  default:
    result = "Grade is Invalid";
    break;
}
console.log("Result = " + result);
