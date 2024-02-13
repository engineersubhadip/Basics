function getEmail(firstName,lastName){
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
}

let rashika = {
    firstName:"Rashika",
    lastName:"Desai",
    getFunc : getEmail(this.firstName,this.lastName) // we are invoking the function here itself. So this will be a function invocation. So "this" will point to Global Object. Since, in the Global Object there is no "firstName" and "lastName". So their values will be "undefined".
    // So the output will be "undefined.undefined@gmail.com"
}

let result = rashika.getFunc; // undefined.undefined@gmail.com

result(); // Give us error. saying that result is not a function

// * Output for line 13 :-
// We are executing in Node and Non-Strict Mode
// result = function getEmail(firstName,lastName){
//     console.log(`${this.firstName}.${this.lastName}@gmail.com`);
// }
// We are making a direct/function invocation, so the value of "this" will point to the Global Object.
// Since, in the Global Object there is no "firstName" and "lastName". So their values will be "undefined".
// So the output will be "undefined.undefined@gmail.com"
