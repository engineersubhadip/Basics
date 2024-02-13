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

// Student.getEmail but it should print Steve.Rogers@gmail.com
student.getEmail.call(teacher);

// The function function (){
    //     console.log(`${this.firstName}.${this.lastName}@gmail.com`);
    // }
// "This" is pointing to Teacher Object because of the usage of Call