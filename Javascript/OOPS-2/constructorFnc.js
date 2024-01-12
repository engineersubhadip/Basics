// Write a constructor function for a Person having name and age property.

function Person(name,age){
    this.name = name;
    this.age = age;
};

const person1 = new Person("Peter",25);

const person2 = new Person("Jackson",29);

console.log(person1);

console.log(person2);