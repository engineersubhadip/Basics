function getRandomInt(max){
      return Math.floor(Math.random()*max);
}

function createPromise(){
      return new Promise(function executor(resolve,reject){
            setTimeout(function (){
                  let num = getRandomInt(10);
                  if (num % 2 == 0){
                        resolve(num);
                  }else{
                        reject(num);
                  }
            },10000)
      })
}

console.log("Starting ...");
let p = createPromise();
console.log("Currently the Promise Object looks like",p);
console.log("We are waiting for the Promise Object to complete");

p.then(function fulfillHandler(value){
      console.log("THe value for FulFill Handler is",value);
}, function rejectionHandler(value){
      console.log("THe value for FulFill Handler is",value)
})


