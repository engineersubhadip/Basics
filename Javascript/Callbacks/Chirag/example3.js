for (var i=0; i<5;i++){
    setTimeout(function(){
        console.log(i);
    });
};

// * It will print 5, "5" times
// "var" takes either "function" or "global" scope. Here `Var i` will take `global` scope. Meaning the variable `i` can be accessed outside of the FOR Loop and its value is `5`.
// In each iteration, the callback is pushed inside of the WebApi with a timer of 0s. Which when completed will push the callback inside the Macro-task queue. Once the callstack is empty, then event loop will one by one push the callback from Macro-task queue to Callback to execute.
// Once it is inside the Callstack and is ready to be executed, it checks the value of "i". The value of "i" is avaiable globally and its value is 5.
// So, it will print 5