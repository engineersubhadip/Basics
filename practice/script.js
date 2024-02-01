class Person{
    constructor(name,age){
        console.log(this);
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("Subhadip",29);

console.log(person1);



// We create a Student class with name,age,batch property

class Student{
    constructor(name,age,batch){
        this.name = name;
        this.age = age;
        this.batch = batch;
    }
}

let student1 = new Student("Parikh",25,"Academy DSML");

console.log(student1);