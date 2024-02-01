// I want to add a function to each and every object. (Ex Detail of Car). Where should I add this function

function Car(name,speed){
    this.name = name;
    this.speed = speed;
    // this.detail = function(){
    //     console.log(`The speed is ${this.speed} and the name is ${this.name}`);
    // }
}

Car.prototype.detail = function(){
    console.log(`The speed is ${this.speed} and the name is ${this.name}`);
}

let c1 = new Car("Bmw",320);

let c2 = new Car("Nissan",180);

console.log(c1);

console.log(c2);

c1.detail();

c2.detail();