let student = {
    firstName:"Adam",
    lastName:"Smith",
    age:29,
    getEmail:function (){
        console.log(`${this.firstName}.${this.lastName}@gmail.com`);
    }
}

let teacher = {
    firstName:"Steve",
    lastName:"Rogers",
    age:26,
    getEmail:function (){
        console.log(`${this.firstName}.${this.lastName}@gmail.com`);
    }
}

student.getEmail();

// We are doing a method invocation at this point.
// So the value of "this" inside the function will point to the object through which it is getting called.
//* Output will be "Adam.Smith@gmail.com"