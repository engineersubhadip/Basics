let rashika = {
    firstName:"Rashika",
    lastName:"Desai",
    getEmail : function (firstName,lastName){
        console.log(`${this.firstName}.${this.lastName}@gmail.com`);
    }
}

let result = rashika.getFunc; 

// The value of result will be -> function (firstName,lastName){
    //     console.log(`${this.firstName}.${this.lastName}@gmail.com`);
    // }

result(); // Will return us "undefined.undefined@gmail.com". Because we are doing a function invocation at this point. So Function invocation in Node (non-Strict) will give us Global Object.
