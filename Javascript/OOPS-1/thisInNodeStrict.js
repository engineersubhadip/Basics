"use strict"

console.log(this); // We get empty Object {}

// * Via Direct Invocation 

function f(){
    console.log(this);
}

f(); // We get undefined

// * Via Method Invocation

let obj = {
    name : "Stark",
    company : "Stark Industries",
    sayHello: function(){
        console.log(this);
    }
};

obj.sayHello(); // We will get parent object itself

let result = obj.sayHello;

result(); // This will give us undefined as we are executing the function in STRICT Mode and doing DIRECT Invocation


function f(){
    // console.log(this);

    function g(){
        console.log(this);
    }

    g(); // Direct Invocation :- This will give undefined
}

f(); // -> This will return undefined