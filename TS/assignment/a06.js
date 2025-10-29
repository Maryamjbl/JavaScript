var Gadget = /** @class */ (function () {
    function Gadget(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    Gadget.prototype.showInfo = function () {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Price: " + this.price);
    };
    return Gadget;
}());
var gadget = new Gadget("Samsung", "Galaxy s23", 79999);
gadget.showInfo();
console.log("********************************");
// TASK 3
var Driver = /** @class */ (function () {
    function Driver(name, licenseNumber) {
        this.name = name;
        this.licenseNumber = licenseNumber;
    }
    return Driver;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleType, registrationNo) {
        this.vehicleType = vehicleType;
        this.registrationNo = registrationNo;
    }
    return Vehicle;
}());
var deliveryDriver = {
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
var Customer = /** @class */ (function () {
    function Customer(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return Customer;
}());
var c1 = {
    name: "Ayesha",
    email: "ayesha@mail.com",
};
var c2 = {
    name: "Rahul",
    email: "rahul@mail.com",
    phone: 9876543210,
};
function showCustomerDetailsTS(customer) {
    console.log("Name:", customer.name);
    console.log("Email:", customer.email);
    if (customer.phone) {
        console.log("Phone:", customer.phone);
    }
    else {
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
