function Laptop(name,price,ramSize){
    this.name = name;
    this.price = price;
    this.ramSize = ramSize;
}

Laptop.prototype.detail = function(){
    console.log(`Name is ${this.name}, price is ${this.price} and ram is ${this.ram}`);
}

let l1 = new Laptop("Dell",1300,8);

let l2 = new Laptop("Lenovo",1100,8);

console.log(l1);
console.log(l2);


l1.detail();

l2.detail();