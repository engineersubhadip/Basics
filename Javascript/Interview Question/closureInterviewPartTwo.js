// // * We want to print 1 after 1s, 2 after 2s ...


// function timer(){
//       let count = 1;
//       function callback(){
//             let delay = count*1000;
//             let currTime = new Date().getTime();

//             while (new Date().getTime() < currTime + delay){
//                   // * Do Something
//             }

//             console.log(count);
//             count+=1;
//       }
//       return callback;
// }

// let value = timer();

// value();
// value();
// value();
// value();



function outer(){
      function inner(){
            for (var i=1; i<= 5; i++){
                  // let count = i;
                  function innermost(){
                        // let count = i;
                        setTimeout(()=>{
                              console.log(`The value is ${i} and the delay is ${i*1000}`);
                        },i*1000)
                  }
                  innermost();
            }
      }
      return inner;

}

let result = outer();
result();
// i:"XX":1 count:"AA":1
// i:"XX":2 count:"AB":2

// 6  6000
// 6  6000
// 6  6000
// 6  6000
// 6  6000

// console.log(result);



