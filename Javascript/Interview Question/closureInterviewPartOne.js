function x(){
      var i = 20;
      setTimeout(function f(){
            console.log(i);
      },4000);
      console.log("This is to be printed"); //*1
}

x();

// * The callback f forms a CLOSURE.
// * It remembers the reference to the variable "i".



// function outer(){
//       let count = 0;
//       function inner(){
//             count+=1;
//             console.log(count);
//       }
//       return inner;
// }

// let res = outer();
// console.log(res);

// res();


// [[scope]] :{
//       closure:count
// }