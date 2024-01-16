// function Car(name,color){
//     this.name = name;
//     this.color = color;
//     // this.detail = function(){
//     //     console.log(`Name is ${this.name} and color is ${this.color}`);
//     // }
// }

// Car.prototype.detail = function(){
//     console.log(`Name is ${this.name} and color is ${this.color}`);
// }

// let bmw = new Car("BMW","gray");

// let nissan = new Car("Nissan","yellow");

// console.log(bmw);
// console.log(nissan);

// console.log(bmw.detail());

// * Now we will see how to store functions inside an object created without a constructor:-

let obj = {
    name:"Nissan",
    color:"Yellow",
    engine:"V6",
    detail:function(){
        console.log("The value of this is",this);
    }
};

obj.detail();

let obj1 = {
    name:"Scaler",
    color:"blue"
}

obj.detail.call(obj1)

// `This` keyword inside obj was pointing to obj. Now lets say if we want to use the function detail for obj1 without defining the function inside obj1. What we can do is we can first try to access the function defined inside obj by obj.detail And then do .call(obj1). By doing the last part `this` keyword will now point to obj1 and also we are calling the function detail.

// So basically if one object needs to borrow a function from another object.
// We firstly get the access to the function present in first object. Then we use .call(pass in another object). By doing this, the `this` keyword present inside the function will now point to `another object`.
// Also, by doing .call(another obj) we are executing the function.


// Example Two :-

let o1 = {
    name:"Peter",
    class:12,
    detail:function(subject1,subject2){
        this.subject1 = subject1;
        this.subject2 = subject2;
        console.log("The value of this is",this);
    }
};

console.log(o1.detail("Maths","Science")); // In a normal object, how are we passing arguments which are later being converted to key:value pair