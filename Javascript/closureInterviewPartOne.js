function x(){
      var i = 20;
      setTimeout(function f(){
            console.log(i);
      },4000);
      console.log("Namaste JS !!");
}

x();

// * The callback f forms a CLOSURE.
// * It remembers the reference to the variable "i".