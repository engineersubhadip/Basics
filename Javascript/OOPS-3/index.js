// function Car(name,color){
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.detail = function(){
//     console.log(`Name of the car is ${this.name} and the color is ${this.color}`);
// }

// let c1 = new Car("BMW","Red");
// let c2 = new Car("Ferarri","Black");

// console.log(c1);
// console.log(c2);

// c1.detail();
// c2.detail();


let person1 = {
    name:"Tharun",
    age:25,
    greet:function(){
        console.log("Value of this keyword is",this);
    }
}

person1.greet();

let person2 = {
    name:"Aman",
    age:26
}

person1.greet.call(person2);
