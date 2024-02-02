// Explicit Function Binding:
// You have a function calculate which takes two arguments a and b and returns the sum of these two values. How can you use the call method to explicitly bind calculate to different objects and execute it with their contexts?

function calculate(a,b){
    return a+b;
}

let obj1 = {a:10, b:20};
let obj2 = {c:30, d:40};

let result1 = calculate.call(obj1,obj1.a,obj1.b);
let result2 = calculate.call(obj2,obj2.c,obj2.d);

console.log(result1);
console.log(result2);

//  By saying `calculate` we are able to access the function. Now by using .call(obj) we are setting the context of `this` keyword inside the function to `obj`. Next, since the function `calculate` accepts 2 parameters we are sending in the values of the 2 keys inside the `obj`