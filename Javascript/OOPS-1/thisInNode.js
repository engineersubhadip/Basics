// console.log(this); {}

// function f(){
//     console.log(this); //global Object
// };

// f();

let obj = {
    name:"Tony",
    age:45,
    sayHello:function(){
        console.log("Tony says hello");
    }
};

obj.sayHello();