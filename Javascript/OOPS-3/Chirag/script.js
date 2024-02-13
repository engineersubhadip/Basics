function getEmail(){
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
}

let obj1 = {
    firstName:"Subhadip",
    lastName:"Das",
    age:29
}

let obj2 = {
    firstName:"Sunny",
    lastName:"Pathak",
    age:26
}

getEmail.call(obj1);

getEmail.call(obj2);

let result = getEmail.bind(obj1);

result.call(obj2); // Even though we are trying to set the context of result to obj2. Still it will print details related to obj1. Because the function is already bind to obj1