class Product {
  name;
  price;
  quantity;

  constructor(n, p, q) {
    this.name = n;
    this.price = p;
    this.quantity = q;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }

  applyDiscount(discount) {
    this.price = this.price - (this.price * discount) / 100;
  }

  restock(q) {
    this.quantity = this.quantity + q;
  }

  isOutOfStock() {
    return this.quantity == 0 ? true : false;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

let totalValue = product1.calculateTotalValue();
console.log(`Total Value => ${totalValue}`);

product1.applyDiscount(10);
console.log(`New Price => ${product1.price}`);

product1.restock(20);
console.log(`New Quantity => ${product1.quantity}`);

product1.displayInfo();
product2.displayInfo();
product3.displayInfo();

console.log(`Is Out of Stock => ${product1.isOutOfStock()}`);
console.log(`Is Out of Stock => ${product2.isOutOfStock()}`);
console.log(`Is Out of Stock => ${product3.isOutOfStock()}`);

product1.displayInfo();


