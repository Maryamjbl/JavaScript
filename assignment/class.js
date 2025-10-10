class Product {
  name;
  price;
  quantity;

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }

  applyDiscount(discountPercentage) {
    const discountAmount = (this.price * discountPercentage) / 100;
    this.price -= discountAmount;
  }

  restock(newQuantity) {
    this.quantity += newQuantity;
  }
}
