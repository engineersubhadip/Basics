// * Creating Object via Constructor :-

// *Method-01

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.getDetails = function(){
//         console.log(`Name is ${this.name} and age is ${this.age}`);
//     }
// }

// let obj1 = new Person("Atul",29);

// let obj2 = new Person("Mayank",27);

// console.log(obj1);

// console.log(obj2);


// How obj1 and obj2 will look like :-
// obj1 -> {name :"Atul", age:29, getDetail:f}
// Inside the Prototype of Obj1 we will have constructor : f(Person) and Prototype.
// Inside the 2nd Prototype we will have Native JS Object Methods.
// Same for Obj2


// *Method-02

function Person(name,age){
    this.name = name;
    this.age = age;
    // this.getDetails = function(){
    //     console.log(`Name is ${this.name} and age is ${this.age}`);
    // }
}

Person.prototype.getDetails = function(){
    console.log(`Name is ${this.name} and age is ${this.age}`);
}

let obj1 = new Person("Atul",29);

let obj2 = new Person("Mayank",27);

console.log(obj1);

console.log(obj2);














