//PART 1:
class productProperties {

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

//PART 3:

// for percentage off of product price
    static applyDiscount = 0.2;

    static applyDiscountProducts(products, discount){
        products.array.forEach(product => {
            product.price = product.price * (1 - discount)
        });
    }
    //subtracting discount
    getTotalValueWithDiscount() {
        const discountedPrice = this.price * (1 - ProductProperties.applyDiscount);
        return discountedPrice * this.quantity;
    }
    
    getTotalValue() {
        return this.price * this.quantity;
    }
    
    toString() {
        console.log(`name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
}
}

//PART 2//

class perishableProductProperties extends productProperties {
  constructor (name, price, quantity, expirationDate){
    super(name, price, quantity);

    this.expirationDate = expirationDate;
  }
  toString() {
    return `${super.toString()}, Expiration Date: ${this.epirationDate}`;
  }
}
const orange = new perishableProductProperties('Orange', 3.5, 10, '2024-12-20'); //3.5 $ per item
console.log(orange.toString());

const milk = new perishableProductProperties('Milk', 2.5, 3, '2024-12-12');
console.log(milk.toString());

//PART 4//
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayInfo() {
        console.log(`name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}

class PerishableProduct extends Product {
    constructor(name, price, quantity, expiryDate) {
        super(name, price, quantity);  // Call the parent class constructor
        this.expiryDate = expiryDate;
    }

    displayInfo() {
        console.log(`name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expiryDate}`);
    }
}

class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    displayInventory() {
        console.log('Inventory:');
        this.inventory.forEach(product => product.displayInfo());
    }
}

// Create Product and PerishableProduct instances
const product1 = new Product('Orange', 3.5, 10);
const product2 = new Product('Milk', 2.5, 3);
const product3 = new Product('Water', 1.2, 20);
const product4 = new Product('Napkins', 5.0, 50);
const product5 = new Product('Plate', 2.0, 30);

const perishableProduct1 = new PerishableProduct('Apple', 1.5, 100, '2024-12-31');
const perishableProduct2 = new PerishableProduct('Cheese', 4.0, 10, '2024-11-20');

// Create a Store instance
const myStore = new Store();

// Add products to the store's inventory
myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(product4);
myStore.addProduct(product5);
myStore.addProduct(perishableProduct1);
myStore.addProduct(perishableProduct2);

// Display the inventory
myStore.displayInventory();
