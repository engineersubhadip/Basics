function test(){
    console.log(this);
}

let obj = {
    name:"Atul",
    age:17
}

obj.myTest = test;

// console.log(obj);

obj.myTest();

// The output will be obj itself. Because it is a method invocation

let x = obj.myTest;

x(); // We will get global object, because we are making function invocation

x.call(obj) // The context of this in the function will now refer to obj being passed as an argument inside call