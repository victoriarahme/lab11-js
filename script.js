//PART 1:
class productProperties {

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    static applyDiscount = 0.2;

    static applyDiscountProducts(products, discount){
        products.array.forEach(product => {
            
            
        });
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

//PART 3: