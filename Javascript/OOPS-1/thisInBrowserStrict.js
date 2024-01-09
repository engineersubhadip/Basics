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

