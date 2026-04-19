interface Product {
  name: string;
  price: number;
  description?: string;
}

const p1: Product = {
  name: "Phone",
  price: 70000,
};

const p2: Product = {
  name: "Laptop",
  price: 100000,
  description: "A high-end gaming laptop",
};

console.log(p1);
