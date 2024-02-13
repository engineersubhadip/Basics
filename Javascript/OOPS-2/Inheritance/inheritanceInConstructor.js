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

Object.setPrototypeOf(SuperCar.prototype,Car.prototype); // Equivalent to "extends" keyword in Class
// Line 39 is saying that inside the prototype of SuperCar we will put the constructor function of SuperCar and a Prototype (which when expanded will give us the constructor function of Car and another prototype)

Object.setPrototypeOf(Car.prototype,X.prototype);  // Equivalent to "extends" keyword in Class
// Line 41 is saying that inside the prototype of Car we are putting the constructor function of Car and a prototype(which when expanded will give is the constructor function of X and another prototype)
// When we expand that "another prototype from above" we will find the native JS Code


let s1 = new SuperCar("Nissan","Yellow","GTX",2568222);

console.log(s1);

// *Note
// Inside the Prototype of SuperCar we will not have the constructor function of SuperCar because of line 34. Which states that inside the prototype of SuperCar store the prototype of Car