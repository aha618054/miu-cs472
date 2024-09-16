import Product from "./product";

const product1 = new Product(1, 'Laptop', 1200, 'High-performance laptop');
product1.save();

const product2 = new Product(2, 'Phone', 800, 'Latest smartphone');
product2.save();

// Fetch all products
const allProducts = Product.fetchAll();
console.log(allProducts);

// Find a product by id
const foundProduct = Product.findById(1);
console.log(foundProduct);

// Update a product
product1.price = 1100;
product1.update();

// Delete a product by id
Product.deleteById(2);
