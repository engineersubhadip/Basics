// * The task is that constructor function SuperCar will inherit from Constructor Function Car

function Car(name,color){
    this.name = name;
    this.color = color;
    this.detail = function(){
        return `We are running details of ${this.name}`;
    }
}

Car.prototype.getModel = function(){
    return `The name is ${this.name} and color is ${this.color}`;
}

let c1 = new Car("x","y");

console.log(c1);

function SuperCar(name,color,brand,price){
    Car.call(this,name,color); // Equivalent to "super" keyword
    this.brand = brand;
    this.price = price;
}

SuperCar.prototype = Object.create(Car.prototype); // Equivalent to "extends" keyword

SuperCar.prototype.brandName = function(){
    return "This is the brand Name"
}

let s1 = new SuperCar("Nissan","Yellow","GTX",2568222);

console.log(s1);