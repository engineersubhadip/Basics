// * Normal Prototype

// let obj1 = {name:"perter",age:29};

// let obj2 = {name:"Kimberly",age:23};

// console.log(obj1);
// console.log(obj2);


// * Via Constructor

function Car(name,model){
    this.name = name;
    this.model = model;
}

const car1 = new Car("Murceilago","Xmw32");

const car2 = new Car("Mustang","Piston 360");


console.log(car1);

console.log(car2);
