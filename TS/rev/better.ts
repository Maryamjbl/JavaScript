let x: number = 90;
console.log(x);

let title:string = "Future Leaders Academy";
console.log(title);

let isMember: boolean = true;
isMember = false;

if (isMember) {
  console.log("You have Logged in already");
} else {
  console.log("Sign Up");
}

function calculateArea(l:number, b:number) : number {
    let result:number = l * b;
    return result;
}

let area: number = calculateArea(10,5);
console.log("Area of the rectangle is:", area);

let firstArea: number = calculateArea(10, 5);
let secondArea: number = calculateArea(20, 10);

