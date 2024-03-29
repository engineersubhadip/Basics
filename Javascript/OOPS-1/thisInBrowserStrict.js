"use strict"

console.log(this); // This will return Global/Window Object


// * Direct Invocation

function fn(){
    console.log(this);
};

fn(); // This will return undefined

//  * Method Invocation

let obj = {
    name : "Peter",
    company:"New Company",
    sayHello:function(){
        console.log(this);
    }
};

obj.sayHello(); // This will return us the Parent Object Itself

let res = obj.sayHello;

res(); // This is a Direct Invocation. We will be getting undefined


let ob1 = {
    name:"Pascal",
    location:"Juarez",
    saysHello:function(){
        console.log(this.name);
    }
};

// * Scenario -01

ob1.saysHello(); // This is a Method Invocation. So it will return the Parent Object itself. From that object we are getting the value of the `name` key. So, "Pascal" will be printed

// * Scenario -02

let res1 = ob1.saysHello; // res1 will have the anonymous function

res1(); // We are now using direct invocation of the anonymous function in the Strict Mode. This will give undefined. As this will be undefined and we are doing undefined.name so error



