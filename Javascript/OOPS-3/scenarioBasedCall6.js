// Polymorphism:
// Suppose you have an object vehicle with a method start which logs "Vehicle started!". Now, you also have two other objects car and bike, both having their own start methods. How can you use the call method to ensure that each object's start method is called with its own context while avoiding method overriding?

let vehicle = {
    start:function(){
        console.log("Vehicle started");
    }
}

let car = {
    start:function(){
        console.log("Car started");
    }
}

let bike = {
    start:function(){
        console.log("Bike started");
    }
}


vehicle.start.call(vehicle)

car.start.call(car)

bike.start.call(bike)

// Or we could have done something like
// vehicle.start();
// car.start();
// bike.start();

// So basically we are doing a method invocation over here and since it is a method invocation. `this` will point to the object through which the function is getting called