class Car{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    static getPrice(){
        console.log(this);
        console.log(`The price is ${this.price}`);
    }
}

let c1 = new Car("Bmw",100000);

console.log(c1);

Car.getPrice();