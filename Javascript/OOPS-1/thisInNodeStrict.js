"use strict"

console.log(this); // We get empty Object {}

function f(){
    console.log(this);
}

f();