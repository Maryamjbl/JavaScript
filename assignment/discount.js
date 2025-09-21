let total = 2000;
let couponCode = "DISC10";
let discountPercent = 0;

switch (couponCode) {
  case "DISC5":
    discountPercent = 5;
    break;

  case "DISC10":
    discountPercent = 10;
    break;

  case "DISC20":
    discountPercent = 20;
    break;

  default:
    discountPercent = 0;
    break;
}

let discountAmount = (total * discountPercent) / 100;
let finalBill = total - discountAmount;

console.log("Original Bill:", total);
console.log("Coupon Applied:", couponCode);
console.log("Final Bill after Discount:", finalBill);
