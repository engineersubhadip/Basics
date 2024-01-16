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

console.log(obj.detail.call(obj1)) 

// `This` keyword inside obj was pointing to obj. Now lets say if we want to use the function detail for obj1 without defining the function inside obj1. What we can do is we can first try to access the function defined inside obj by obj.detail And then do .call(obj1). By doing the last part `this` keyword will now point to obj1

