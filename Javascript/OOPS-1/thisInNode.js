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

obj.sayHello(); // METHOD Invocation :- Our function is part of an object and we are calling the function via the obj