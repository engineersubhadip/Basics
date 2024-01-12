// Create a Constructor Function for creating objects for Laptops.
// which should have four properties name,color,RAM, Screen size.
// and the method which prints its values :- Make it memory efficient

function Laptop(name,color,ram,screenSize){
    this.name = name;
    this.color = color;
    this.ram = ram;
    this.screenSize = screenSize;
};

Laptop.prototype.details = function(){
    console.log(`Name of the Laptop is ${this.name} color is ${this.color} ram is ${this.ram} and screen size is ${this.screenSize}`);
}

const laptop1 = new Laptop("HP","Steel",16,14);

const laptop2 = new Laptop("Asus","Black",8,16);

const laptop3 = new Laptop("MacBook","Pink",8, 13.5);


laptop1.details();

laptop2.details();

laptop3.details();

