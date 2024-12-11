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
class store {
    constructor(inventory){
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    displayInventory() {
        console.log('inventory:');
        this.inventory.forEach(product => product.displayInfo());
    }
};

const product1 = newProduct('sugar');
const product2 = newProduct('tea');

const product3 = newProduct('water');
const product4 = newProduct('napkins');
const product5 = newProduct('plate');

const perishableProduct1 = newProduct('apple');
const perishableProduct2 = newProduct('cheese');