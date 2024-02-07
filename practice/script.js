function a(){
    console.log("The value of this is "+this+" inside function a");
}

function b(){
    console.log("The value of this is "+this+" inside function b");
}


b.call(a);


// The context of "this" inside function b is pointing to function a(){
//     console.log("The value of this is "+this+" inside function a");
// }

// Meaning this ->  function a(){
//     console.log("The value of this is "+this+" inside function a");
// }

// Therefore the output will be
// The value of this is function a(){
//     console.log("The value of this is "+this+" inside function a");
// } inside function b