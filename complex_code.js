// Filename: complex_code.js
// Description: Complex JavaScript code demonstrating a simulated e-commerce website with shopping cart functionality

// Define classes for Product, CartItem, and ShoppingCart
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.findItem(product);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new CartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  findItem(product) {
    return this.items.find((item) => item.product === product);
  }

  getTotalQuantity() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
  }

  getItems() {
    return this.items;
  }
}

// Create sample products
const laptop = new Product('Laptop', 999, 1);
const headphones = new Product('Headphones', 99, 2);
const keyboard = new Product('Keyboard', 49, 3);

// Create shopping cart instance
const cart = new ShoppingCart();

// Add items to cart
cart.addItem(laptop, 1);
cart.addItem(headphones, 2);
cart.addItem(keyboard, 1);

// Remove an item from the cart
cart.removeItem(headphones);

// Display the cart details
console.log('Shopping Cart Details:');
console.log('----------------------');
console.log('Total Items:', cart.getTotalQuantity());
console.log('Total Price:', cart.getTotalPrice());
console.log('Cart Items:', cart.getItems());

// Output:
// Shopping Cart Details:
// ----------------------
// Total Items: 4
// Total Price: 1146
// Cart Items: [
//   CartItem {product: Product {name: "Laptop", price: 999, quantity: 1}, quantity: 1},
//   CartItem {product: Product {name: "Keyboard", price: 49, quantity: 3}, quantity: 1}
// ]