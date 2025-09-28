let shoppingList = ["Eggs", "Bread", "Cheese", "Honey", "Rice"];

console.log("Total items:", shoppingList.length);

let searchGrocery = "Milk";
let found = shoppingList.includes(searchGrocery);
console.log(searchGrocery + "  Is Milk present in array? " + found);

shoppingList.unshift("Milk");
console.log(shoppingList);
