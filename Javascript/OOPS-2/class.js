// Write a class for a Person having name and age property.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
};

const person1 = new Person("Tony",48);

console.log(person1);

// Create a class for Students having name, age and batch property

class Student extends Person{ // Student class is inheriting from Person class
    constructor(name,age,batch){
        super(name,age); // We are invoking the Parent constructor and passing in the arguments expected by the parent constructor
        this.batch = batch;
    }
};

let student1 = new Student("Kat",25,"Academy 22");

console.log(student1);
