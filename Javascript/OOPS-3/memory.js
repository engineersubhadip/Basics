// * Primitive

// let a = 10;
// let b = 20;

// b = a;
// b = 30;

// console.log(b);
// console.log(a);

// * Reference

let obj1 = {
    name:"Alex"
}

let obj2 = obj1;

obj2.name = "Adam";

console.log(obj1);

console.log(obj2);

// variable Obj1 gets created inside the callstack. What value we are storing inside Obj1 will depend whether the value is of Primitive/Reference Data type. We are trying to store a reference data type. If we are storing a reference data type inside Obj1. The reference data type gets stored inside the Heap Memory and obj1 stores the heap memory reference of obj1. Meaning Obj1 is pointing to the {name:"Alex"}(present inside the Heap) via the memory reference address.
// We do obj2 = obj1. Variable Obj2 gets created inside the Callstack and what we are storing inside Obj2 is Obj1. What is the value of Obj1 ? -> It is the heap memory reference address. So the value of Obj2 is the same heap memory reference stored inside Obj1.
// We are doing Obj2.name = "Adam" -> We are accessing Obj2. What is there inside Obj2 ? (Heap Memory reference). We are going inside the heap memory reference {name:"Alex"} and changing it to "Adam". 
// Now since both the objects are sharing the same memory reference, therefore, this change will be reflected to both the objects.