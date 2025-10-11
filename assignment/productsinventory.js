let products = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
  { name: "Keyboard", price: 45, stock: 60 },
  { name: "Headphones", price: 80, stock: 40 },
];

console.log("Product List:");
console.table(products);

let affordable = products.filter((item) => item.price <= 100);
console.log("Affordable Products:", affordable);

let totalPrice = products.reduce((sum, item) => sum + item.price, 0);
let averagePrice = totalPrice / products.length;
console.log(`Average Price of Products = ${averagePrice}`);

let totalStock = products.reduce((sum, item) => sum + item.stock, 0);
console.log(`Total Stock Available = ${totalStock}`);

let product = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
  { name: "Keyboard", price: 45, stock: 60 },
  { name: "Headphones", price: 80, stock: 40 },
];


products.forEach((item) => {
  let totalValue = item.price * item.stock;
  console.log(
    `${item.name} (${item.price}) - Stock: ${item.stock} - Total Value: ${totalValue}`
  );
});
