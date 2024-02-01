// Write a constructor function for a Person having name and age property.

function Person(name,age){
    // this keyword will point to an empty object
    this.name = name;
    this.age = age;
    // The default return type is "this" keyword
    // {name:"Subhadip", age:28} -> Person1
    // {name:"Aman", age:30} -> Person2
}

let person1 = new Person("Subhadip",28);

let person2 = new Person("Aman",30);

console.log(person1);

console.log(person2);

// Person.prototype.sayHello = function(){
//     console.log(this.name+" says hello there !!");
// }