// * Example-01

var a = 10;
var b = 20;
var c = b;
b = 30;

console.log(a,b,c);

// Variables are always stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// If we are storing Primitive DT. Then those values will be stored in the Callstack itself.
// * Output will be 10, 30, 20

// * Example-02

var a = 10;
var b = 20;

a = b;

console.log(a,b);
// Variables are always stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// If we are storing Primitive DT. Then those values will be stored in the Callstack itself.
// * Output will be 20,20

// *Example-03

var a = 10;
var b = 20;
var temp;

temp = a;
a = b;
b = temp;

a = b;

console.log(a,b)

// Variables are always stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// If we are storing Primitive DT. Then those values will be stored in the Callstack itself.
// * Output will be 10,10

// *Example-04

var a = {name:"Shahbaz"};

var b = {name:"Poorna"};

var c = b;
c.name = "Nirmal";

console.log(a,b,c);

// Variables are stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// Here we are storing Reference DT. So the values will be stored in the Heap Memory and the memory address will be shared to the variables inside the Callstack.
// Meaning the variables from the Callstack are pointing to the Heap Memory where the objects are being stored.

// a -> {name:"Shahbaz"}
// b -> {name:"Poorna"}
// c also points to the same object as b is pointing to.
// c.name = Nirmal -> Meaning whatever "b" and "c" were pointing to gets updated to {name:"Nirmal"}

// a -> {name:"Shahbaz"} ; b -> {name:"Nirmal"} ; c -> {name:"Nirmal"}

// * Example-5

var a = {name:"Shahbaz"}

var b = {name:"Poorna"}

var temp;

temp = a;
a = b;
b = temp;

console.log(a,b);

// Variables are stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// Here we are storing Reference DT. So the values will be stored in the Heap Memory and the memory address will be shared to the variables inside the Callstack.
// Meaning the variables from the Callstack are pointing to the Heap Memory where the objects are being stored.

// a -> {name:Shahbaz}
// b -> {name:Poorna}
// temp = undefined;
// temp -> {name:Shahbaz}
// a -> {name:Poorna}
// b -> {name:Shahbaz}

// So the output is a -> {name:Poorna} and b -> {name:Shahbaz}

// * Example-6

var a = {name:"Shahbaz"}

var b = {name:"Poorna"}

a.name = b.name;
b.name = "Kavya";

console.log(a,b);

// Variables are stored inside the Callstack.
// The values that we are storing inside the variables will depend on what we are trying to store.
// Here we are storing Reference DT. So the values will be stored in the Heap Memory and the memory address will be shared to the variables inside the Callstack.
// Meaning the variables from the Callstack are pointing to the Heap Memory where the objects are being stored.

// a -> {name:Shahbaz};
// b -> {name:Poorna}
// a.name = b.name . So, a -> {name:Poorna}
// b.name = Kavya . So, b -> {name:Kavya}

// So, a -> {name:Poorna} and b -> {name:Kavya}

// * Example-7

let a1 = {
    firstName:"Atul",
    lastName:"Jha",
    address:{
        city:"Patna",
        state:"Bihar"
    }
}

let b1 = {...a1};

a1.firstName = "Ashutosh";

console.log(a1,b1);

// At line 132 we are making a shallow copy of a1. Meaning if the a1 contains nested objects inside it then the copy will be created for only the outer most object. The rest of the Objects will be shared