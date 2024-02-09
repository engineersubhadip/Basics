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