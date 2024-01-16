function Car(name,color){
    this.name = name;
    this.color = color;
    // this.detail = function(){
    //     console.log(`Name is ${this.name} and color is ${this.color}`);
    // }
}

Car.prototype.detail = function(){
    console.log(`Name is ${this.name} and color is ${this.color}`);
}

let bmw = new Car("BMW","gray");

let nissan = new Car("Nissan","yellow");

console.log(bmw);
console.log(nissan);

console.log(bmw.detail());