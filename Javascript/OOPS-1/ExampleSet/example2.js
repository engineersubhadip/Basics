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

obj3.greetFn = greet;

obj3.greetFn();

obj4.greetFn = obj3.greetFn;

obj4.greetFn();

const greetFnFromObj3 = obj3.greetFn.bind(obj3);

greetFnFromObj3();