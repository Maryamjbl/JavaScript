let shoppingList = ["Eggs", "Bread", "Butter", "Honey", "Rice"];

console.log("Total items:", shoppingList.length);

let Milk = shoppingList.includes("Milk");
console.log("Is Milk in the list?", Milk);

shoppingList.unshift("Milk");
console.log(shoppingList);
