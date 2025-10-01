let percent = 75.6;
let grade = "";

if (percent >= 80){
    grade = "A";
} else if (percent >= 60){
    grade =  "B";
} else {
    grade = "C";
}
console.log("Percent = " +  percent);
console.log("grade = " +  grade);

switch (grade) {
    case "A":
        result = "You scored Great"
        break;

         case "B":
        result = "You scored Well"
        break;

        case "C":
        result = "Better Luck Next Time!"
        break; 

    default: "Invalid"
        break;
}
console.log("result = " + result);
