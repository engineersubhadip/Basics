function car(car_name,car_speed){
    console.log(this); // At this point a new empty object gets created and this is pointing to empty obj i.e. this -> {}
    this.name = car_name; // {name:car_name}
    this.speed = car_speed; // {name:car_name, speed:car_speed}

    // And by default it will return the newly created object
}

let bmw = new car("BMW",255); // Using new keyword is a another way of calling a function. What happens is using 'new' keyword before the function 'car', inside the function 'car', a empty object gets created and 'this' is pointing to that object

console.log(bmw);

let nissan = new car("Nissan",285);

console.log(nissan);