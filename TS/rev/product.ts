type newProduct =
{
    title : string,
    price : number,
    description? : string,
}
 let product1 : newProduct = {
    title : "iPhone 14 Pro Max",
    price : 120000,
    description : "The iPhone 14 Pro Max features a stunning 6.7-inch Super Retina XDR display, A16 Bionic chip for lightning-fast performance, and an advanced camera system for capturing incredible photos and videos."
 };

 let product2 : newProduct = {
    title : "Samsung Galaxy S23 Ultra",
    price : 110000,
 }

 console.log(product1);
 console.log(product2);