// * Write a class for a Person having name and age property.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };

    greet(){ // This method will be added to the Common Prototype.
        console.log(`Hello, my name is ${this.name}`); // this will point to the object from which we are calling
    }
};

const person1 = new Person("Tony",48);

console.log(person1);

// * Create a class for Students having name, age and batch property

class Student extends Person{ // Student class is inheriting from Person class
    constructor(name,age,batch){
        super(name,age); // We are invoking the Parent constructor and passing in the arguments expected by the parent constructor
        this.batch = batch;
    }
};

let student1 = new Student("Kat",25,"Academy 22");

console.log(student1);

// * Create a class for Teachers having name, age, batch and class strength property.

class Teacher extends Student{ // Teacher class is inheriting from the Student Class
    constructor(name,age,batch,strength){
        super(name,age,batch); // We are invoking the Student Constructor and passing in the arguments expected as a parameter by the student constructor
        this.strength = strength;
    };
};

const teacher1 = new Teacher("Mr. Parker", 48, "Academy DSA", 120);

console.log(teacher1);

person1.greet();

student1.greet(); // student class is able to inherit the greet because we are adding greet inside the Prototype.

teacher1.greet(); // teacher class is able to inherit the greet because we are adding greet inside the Prototype.