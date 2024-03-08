let vehicle = {
    name:"Mercedes",
    color:"White"
}

function buyCar(price){
    return `I bought a ${this.color} ${this.name} with ${price}.`;
}

// let ans = buyCar.bind(vehicle);

// console.log(ans(7777777));


Function.prototype.myBind = function(object,...args1){
    object.fxn = this;
    return function f1(...args2){
        return object.fxn(...args1,...args2);
    }
}

let ans = buyCar.myBind(vehicle);

console.log(ans(88888));