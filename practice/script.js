class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("Subhadip",29);

console.log(person1);



// We create a Student class with name,age,batch property

// class Student{
//     constructor(name,age,batch){
//         this.name = name;
//         this.age = age;
//         this.batch = batch;
//     }
// }

// let student1 = new Student("Parikh",25,"Academy DSML");

// console.log(student1);

// * Using Inheritance

class Student extends Person{ // Means the Student class will inherit some properties from the Person Class
    constructor(name,age,batch){
        super(name,age); // Invoking the constructor of the Person Class
        this.batch = batch;
    }
}

let s2 = new Student("Sam",24,"Web Fundamentals");

console.log(s2);