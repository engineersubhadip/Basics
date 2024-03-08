const vehicle = {
    name:"Mercedes",
    color:"White"
}

function buyCar(price){
    console.log(`I bought a ${this.color} ${this.name} with ${price}.`);
}

// console.log(buyCar.call(vehicle,10000))

Function.prototype.myCall = function(object,...args){
    object.customKey = this;
    object.customKey(...args);
}

console.log(buyCar.myCall(vehicle,999));