class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // Adding a function to a class
    greet(){
        console.log(this.name+" says hello!");
    }
}

let person1 = new Person("Subhadip",29);

console.log(person1);
person1.greet(); // Method Invocation, so this will point to parent object. 



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

// Lets create another class Teacher with properties such as name, age, batch, class_strength

// * We shall be inheriting properties from Student class.

class Teacher extends Student{
    constructor(name,age,batch,class_strength){
        super(name,age,batch);
        this.class_strength = class_strength;
    }
}

let teacher1 = new Teacher("Altwell",33,"Web Architecture",33);


console.log(teacher1);

teacher1.greet();

class RaceCourse{
    constructor(name){
        this.name = name;
    }
}

// let r1 = new RaceCourse("Golf Course"); -> Because this class is not inheriting anything from Person Class
