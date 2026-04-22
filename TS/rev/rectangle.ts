let calculatedArea = (length: number, width: number): number => {
    let area: number = length * width;
    return area;
}   
let area1 : number  = calculatedArea(10, 5);
console.log("Area of the rectangle is:", area1);