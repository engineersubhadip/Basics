// * The task is that constructor function SuperCar will inherit from Constructor Function Car


function X(name){
    this.name = name;
}

let v = new X("New One");

console.log(v);

function Car(name,color){
    X.call(this,name)
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

// SuperCar.prototype = Object.create(Car.prototype);

// SuperCar.prototype.[[Prototype]] = Object.create(Car.prototype); // Equivalent to "extends" keyword

Object.setPrototypeOf(Car.prototype,X.prototype);

Object.setPrototypeOf(SuperCar.prototype,Car.prototype);


// SuperCar.prototype.brandName = function(){
//     return "This is the brand Name"
// }

let s1 = new SuperCar("Nissan","Yellow","GTX",2568222);

console.log(s1);

// *Note
// Inside the Prototype of SuperCar we will not have the constructor function of SuperCar because of line 25. Which states that inside the prototype of SuperCar store the prototype of Car