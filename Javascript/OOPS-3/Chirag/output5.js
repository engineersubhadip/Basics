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

// I want to bind the function from student to teacher.

let result = student.getEmail.bind(teacher);

result();