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
     ()
}