//PART 1:
class productProperties {

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
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
const orange = new perishableProductProperties('Orange', 3.5, 10, '2024-12-20');
console.log(orange.toString());

