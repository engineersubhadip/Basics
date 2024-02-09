const obj3 = {
    name:"Kavya",
    age:18
}

const obj4 = {
    name:"Sheela",
    age:81
}

function greet(){
    console.log(this);
}

let obj4Fn = greet.bind(obj4);

// let obj3Fn = greet.bind(obj3);

// console.log(obj3Fn());

// console.log(obj4Fn());

// Now we will try to set the context of obj4Fn to obj3.

obj4Fn.call(obj3); // Even though we are trying to set the context of obj4Fn's 'this' to obj3.
// We cannot change its context. Because obj4Fn is bind to obj4.
// So we will print {name:Sheela, age:81}

