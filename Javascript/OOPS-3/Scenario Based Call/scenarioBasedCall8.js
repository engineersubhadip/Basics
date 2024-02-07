// You have two different objects objectA and objectB, each with its own properties and methods. However, objectB does not have a particular method that objectA has. Explain how you would use call or apply to invoke the method from objectA within objectB's context.

let objA = {
    name:"Nikita",
    age:29,
    greet:function(){
        console.log(`${this.name} is of age ${this.age} years old`);
    }
}

let objB = {
    name:"Ravi",
    age:32,
    sayHello:function(){
        console.log(`${this.name} is currently ${this.age} years old`);
    }
}

objA.greet.call(objB);

objB.sayHello.call(objA);

// We are setting the context of "this" keyword inside each function to set the context of the other function