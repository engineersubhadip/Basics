// You have an object representing a person with properties like name and age. You also have a method called introduce within the object that prints a greeting message along with the person's name and age. Explain how you would use call, apply, and bind to introduce another person using the same introduce method.

let obj1 = {
    name:"Tharun",
    age:29,
    introduce:function(){
        console.log(`Good Morning ${this.name} of age ${this.age}`);
    }
}

let obj2 = {
    name:"Guru",
    age:28
}

let obj3 = {
    name:"Nikita",
    age:27
}

obj1.introduce.call(obj2);

obj1.introduce.call(obj3);

// Here we are setting the context of "this" keyword inside the function, to the argument we are passing inside the call method().
// For the first output the context of "this" keyword is pointing to obj2. And hence it is taking out name and age from there.
// For the second output the context of "this" keyword is pointing to obj3. And hence it is taking out name and age from there.