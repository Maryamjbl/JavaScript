let x: number = 123;
console.log(x);

let title:string = "Future Leaders Academy";

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

let area:number = calculateArea(10,5);
console.log("Area is :", area);




