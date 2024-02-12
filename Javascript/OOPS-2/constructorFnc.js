// let marriage = {
//     name:"Atul",
//     age:29,
//     company:true,
//     address:{
//         city:"Patna"
//     },
//     getDetails:function(){
//         console.log(`Name is ${this.name} and currently working is ${this.company}`);
//     }
// }

// marriage.getDetails();

// * Creating Object via Constructor :-

function Person(name,age){
    this.name = name;
    this.age = age;
    this.getDetails = function(){
        console.log(`Name is ${this.name} and age is ${this.age}`);
    }
}

let obj1 = new Person("Atul",29);

let obj2 = new Person("Mayank",27);

console.log(obj1);

console.log(obj2);



// class Car{
    
//     constructor(model,color){
//         this.model = model;
//         this.color = color;
//         this.getDetail = function(){ // This will get added as a key to the object
//             return `The model is ${this.model} and the color is ${this.color}`;
//         }
//     }

//     getModel(){ // This will get added to the Prototype
//         return `The model is ${this.model}`;
//     }
// }

// class SuperCar extends Car{ // SuperCar is inheriting from Car

//     constructor(model,color,feature,price){
//         super(model,color); // Invoking the parent Constructor
//         this.feature = feature;
//         this.price = price;
//     }
// }

// let s1 = new SuperCar("BMW","Red",["f1","f2"],100000000);

// let s2 = new SuperCar("Nissan","Blue",["f1","f2"],100000000);

// console.log(s1);

// console.log(s2);

// let val = s1.getModel();

// console.log(val);


























// How will s1 look like :-
// {model:"bmw"; color:"red"; feature:[f1,f2]; price:10000}
// s1 is built from SuperCar. Therefore, in the prototype of s1 we will store the constructor -> Class SuperCar.
// Immediate parent of SuperCar is Car. So in the prototype of SuperCar we will store constructor -> Class Car and getModel.
// Parent of Car is Native JS Object. So in the prototype of Car we will store the Native JS Object's functionalities



