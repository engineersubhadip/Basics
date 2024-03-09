function getDetails(color,speed){
    return `I bought ${this.name} car at ${this.price} of color ${color} and speed is ${speed}`;
}

let obj1 = {
    name:"Mercedes",
    price:1000000
}


// let res = getDetails.bind(obj1);

// console.log(obj1);

// res("blue",1222);

// console.log(obj1);

Function.prototype.customBind = function(obj,...args1){
    obj.fxn = this; // {name:Mercedes, price:100000, fxn:Function}
    return function f1(...args2){
        let result = obj.fxn(...args1,...args2);
        delete obj.fxn;
        return result;
    }
}

let res = getDetails.customBind(obj1,"Yellow",999);

console.log(obj1);
console.log(res);

console.log(res())

console.log(obj1);