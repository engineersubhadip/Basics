// // * We want to print 1 after 1s, 2 after 2s ...
// // * Using async Programming


function timer(val){
      function newFun(){
            for (let i=1; i<=val; i++){
                  setTimeout(()=>{
                        console.log(i);
                  },i*1000)
            }
      }
      return newFun;
}

let value = timer(5);
value();


// function timer(delay){
//       for (let i=1; i<=delay; i++){
//             setTimeout(()=>{
//                   console.log(i);
//             },i*1000)
//       }
// }

// timer(5);


// function timer(delay){
//       function counter(){
//             for (let i=1; i<=delay; i++){
//                   setTimeout(()=>{
//                         console.log(i);
//                   },i*1000)
//             }
//       }
//       return counter;
// }

// let result = timer(8);
// result();