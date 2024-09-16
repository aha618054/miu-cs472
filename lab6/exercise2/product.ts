let products: Product[] = [];

class Product {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  // Save a new product to the array
  save() {
    products.push(this);
  }

  // Update an existing product by id
  update() {
    const existingProductIndex = products.findIndex((p) => p.id === this.id);
    if (existingProductIndex > -1) {
      products[existingProductIndex] = this;
    }
  }

  // Fetch all products
  static fetchAll() {
    return products;
  }

  // Find a product by its id
  static findById(productId: number) {
    return products.find((product) => product.id === productId);
  }

  // Delete a product by its id
  static deleteById(productId: number) {
    products = products.filter((product) => product.id !== productId);
  }
}

export default Product;
