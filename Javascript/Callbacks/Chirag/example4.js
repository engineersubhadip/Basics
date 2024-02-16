// * Remedy of Example-3

for (let i=0; i<5;i++){
    setTimeout(function(){
        console.log(i);
    });
};

// * Op is : 0,1,2,3,4
// "let" creates a block scope. Meaning for each and every iteration, it will create a new scope. (that is for i=0 it will create a new scope. For i=1 it will create a new scope).
// When the callback inside the setTimeout is going to execute it will refer to the particular block scope variable. 
// Simpler way, when the callback executes it will have the reference to the value of "i" generated at that block scope.