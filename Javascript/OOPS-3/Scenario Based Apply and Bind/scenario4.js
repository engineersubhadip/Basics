// Scenario 6: Delayed Execution

// You have a function printMessage that logs a message to the console. Create a new function delayedPrint using bind that delays the execution of printMessage by 2 seconds.

function printMessage(){
    console.log("Hello there, how are you ?");
}

let delayedPrint = printMessage.bind(null);

setTimeout(delayedPrint,2000);