class Gadget {
  brand: string;
  model: string;
  price: number;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showInfo(): void {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
    console.log("Price: " + this.price);
  }
}
const gadget = new Gadget("Samsung", "Galaxy s23", 79999);
gadget.showInfo();
console.log("********************************");

// TASK 3
class Driver {
  name: string;
  licenseNumber: string;

  constructor(name: string, licenseNumber: string) {
    this.name = name;
    this.licenseNumber = licenseNumber;
  }
}
class Vehicle {
  vehicleType: string;
  registrationNo: string;

  constructor(vehicleType: string, registrationNo: string) {
    this.vehicleType = vehicleType;
    this.registrationNo = registrationNo;
  }
}

type DeliveryDriver = Driver & Vehicle;

const deliveryDriver: DeliveryDriver = {
  name: "Ramesh",
  licenseNumber: "KA05-1234",
  vehicleType: "Truck",
  registrationNo: "MH12AB9090",
};

console.log("Name:", deliveryDriver.name);
console.log("License:", deliveryDriver.licenseNumber);
console.log("Vehicle Type:", deliveryDriver.vehicleType);
console.log("Registration No:", deliveryDriver.registrationNo);
console.log("****************************");

// TASK 4
class Customer {
  name: string;
  email: string;
  phone?: number;

  constructor(name: string, email: string, phone?: number) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

const c1: Customer = {
  name: "Ayesha",
  email: "ayesha@mail.com",
};

const c2: Customer = {
  name: "Rahul",
  email: "rahul@mail.com",
  phone: 9876543210,
};

function showCustomerDetailsTS(customer: Customer): void {
  console.log("Name:", customer.name);
  console.log("Email:", customer.email);
  if (customer.phone) {
    console.log("Phone:", customer.phone);
  } else {
    console.log("Phone not provided");
  }
  console.log("_________________________");
}

showCustomerDetailsTS(c1);
showCustomerDetailsTS(c2);

// task 5
var flightInfo = ["AI-302", "Dubai", 3.5];

console.log("Flight:", flightInfo[0]);
console.log("Destination:", flightInfo[1]);
console.log("Duration:", flightInfo[2], "hours");
