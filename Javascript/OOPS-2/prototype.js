// * Normal Prototype

// let obj1 = {name:"perter",age:29};

// let obj2 = {name:"Kimberly",age:23};

// console.log(obj1);
// console.log(obj2);


// * Via Constructor

function Car(name,model){
    this.name = name;
    this.model = model;
    // this.detail = function(){ 
    //     console.log(`Name of the car is ${this.name} and model is ${this.model}`);
    // }
}

Car.prototype.detail = function(){
    console.log(`Name of the car is ${this.name} and model is ${this.model}`);
}

const car1 = new Car("Murceilago","Xmw32");

const car2 = new Car("Mustang","Piston 360");


console.log(car1);

console.log(car2);

car1.detail();

car2.detail();


// * If I have to attach a function to all the objects of the Car 


// * Way one :-

// * Attaching function to each and every objects- Line 16
//  * Since the definition of the function is not changing for the car objects we can put the function definition in the Prototype. From which every car object can inherit the function.


// * Way Two:-

// * So instead of attaching the function definition in each and every object, we will attach the function in the common Prototype. By doing this we will save memory as the same key is removed from multiple objects and placed inside the prototype.
// * All the objects will now inherit from  prototype.

