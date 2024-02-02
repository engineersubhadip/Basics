// Scenario 1: Context Preservation
// You have an object car with a property speed. 
// Create a function logSpeed that logs the current speed of the car. 
// Use bind to ensure that when logSpeed is called, this refers to the car object.

let obj1 = {
    speed:320
}

function logSpeed(name){
    console.log(`The speed of the Car is ${this.speed}`);
    this.name = name;
}

let result = logSpeed.bind(obj1);

console.log(result);

// At this point 
// result = function logSpeed(name){
//     console.log(`The speed of the Car is ${this.speed}`);
//     this.name = name;
// }

result("Nissan");

console.log(obj1);

// By saying `logSpeed` we are accessing the function. Then via the usage of `.bind(obj1)` we are setting the context of `this` inside the function `logSpeed` to `obj1`. 
// Because of the usage of the 'bind' keyword it will always return us a function. And the context of 'this' keyword inside the function will always point to obj1. 
// Next we are executing the function. By doing so we are printing out the top speed and also setting a new key value pair inside that object