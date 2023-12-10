function timeConsumingByLoop(){
      console.log("Loop Starts !");

      for (let i=0; i<=10000000000; i++){
            // Some Task;
      }

      console.log("Loop Ends !");
}

function timeConsumingByRunTime(){
      console.log("Timer Starts !");

      setTimeout(function () {
            console.log("Timer Ends");
      }, 5000);
}



console.log("hi");

timeConsumingByLoop();
timeConsumingByRunTime();
timeConsumingByLoop();

console.log("Bye");