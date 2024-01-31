function Car(name,price,top_speed){
    console.log(this);
    this.name = name;
    this.price = price;
    this.top_speed = top_speed;
    // console.log(this) -> {name:"Nissan",price:1230000, top_speed:"260Km/hr"}
    console.log(this);
}


let nissan = new Car("Nissan",1230000,"260Km/hr");

let toyota = new Car("Toyota",1000000,"188Km/hr");

console.log(nissan);

console.log(toyota);

