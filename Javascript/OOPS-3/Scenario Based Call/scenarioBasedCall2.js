// Inheriting Methods:
// Suppose you have two objects animal and dog, where dog is supposed to inherit a method speak from animal. How would you use the call method to achieve this inheritance?

let animal = {
    species:"Mammals",
    color:"Gray",
    age:"No Idea",
    speak:function(){
        console.log(this.breed + " woofs")
        console.log("Animal makes a sound");
    }
}

let dog = {
    breed:"Dalmatian",
    name:"Cairo",
    size:43
}

console.log(animal);

console.log(dog);

animal.speak.call(dog)