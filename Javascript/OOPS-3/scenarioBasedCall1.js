// Context Switching:
// Imagine you have an object car with properties brand and price, and you also have a function showDetails that prints these properties. Now, how would you use the call method to invoke showDetails function with the context of car object?

let car = {
    brand:"Nissan",
    price:1800000,
    showDetails:function(){
        console.log(`Brand of the car is ${this.brand} and the price is ${this.price}`);
    }
}

car.showDetails.call(car);

// `car.showDetails` -> It will give us access of the function `showDetails`. Using `.call(car)` we are changing the reference of `this` keyword inside `showDetails` to `car`. Now that we have access of the whole object itself we are then accessing the value of key `brand` and `price`.