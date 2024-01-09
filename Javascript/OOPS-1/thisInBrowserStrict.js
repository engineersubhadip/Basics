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



