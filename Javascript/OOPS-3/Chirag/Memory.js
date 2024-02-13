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