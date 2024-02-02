// Scenario 2: Dynamic Function Invocation

// You have a function calculateTotal that takes three arguments: subtotal, tax, and discount. 
// However, you have these values stored in an array [100, 10, 5]. 
// Use apply to invoke calculateTotal with the values from the array.

let array = [100,10,5];

function calculateTotal(subtotal,tax,discount){
    console.log(`The Subtotal is ${subtotal}, the tax is ${tax} and discount is ${discount}`);
}

calculateTotal.apply(null,array);