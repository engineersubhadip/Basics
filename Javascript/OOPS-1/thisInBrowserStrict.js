"use strict"

console.log(this); // This will return Global/Window Object


// * Direct Invocation

function fn(){
    console.log(this);
};

fn(); // This will return undefined

