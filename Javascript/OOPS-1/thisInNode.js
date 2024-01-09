// console.log(this); {}

// function f(){
//     console.log(this); //global Object in case of DIRECT Invocation
// };

// f(); // DIRECT Invocation

let obj = {
    name:"Tony",
    age:45,
    sayHello:function(){
        console.log(this); // Object itself in case of METHOD Invocation
    }
};

// obj.sayHello(); // METHOD Invocation :- Our function is part of an object and we are calling the function via the obj

let fn = obj.sayHello; // Now fn will have the anonymous function inside of it.

fn(); // When we are invoking the function here, we are making a DIRECT Invocation. So we will get a GLOBAL Object.