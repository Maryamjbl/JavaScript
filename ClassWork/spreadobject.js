const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const Combinedarray = [...arr1, ...arr2];
console.log(Combinedarray);

const productObject = {
    id: "BOD2TTNTGT",
    title: "Rnadwick Wireless Mouse",
    Category : "Numeric Keypad",
    Price: 3000,
};
console.log(productObject);

const updateProductObject = {
    ...productObject,
     Updatedprice: 3309,
};
console.log(updateProductObject);

