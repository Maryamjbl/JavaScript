function calculateBMI(weight, height) {
    if (weight <= 0) {
        console.log("Weight Cannot be less than or equal to Zero");
        return;
    }
    if (height <= 0) {
        console.log("Height Cannot be less than or equal to Zero");
        return;
    }
    var bmi = weight / (height * height);
    console.log(Math.round(bmi * 100) / 100);
    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Normal Weight");
    }
    else if (bmi >= 25 && bmi < 29.9) {
        console.log("Overweight");
    }
    else {
        console.log("Obese");
    }
}
calculateBMI(40, 3);
