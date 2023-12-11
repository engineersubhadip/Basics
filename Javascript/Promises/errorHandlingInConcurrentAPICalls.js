// Error Handling:
// Discuss strategies for handling errors when making concurrent API calls. How can you ensure that a failure in one request does not affect the execution of other requests?

function food(){
      return new Promise(function exec(resolve,reject){
            console.log("We are fetching the food details...");
            setTimeout(function callbackOne(){
                  let content = "Rabri";
                  resolve(content);
            },3000);
      });
};

function weather(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the weather details...");
            setTimeout(function callbackTwo(){
                  let response = "34.5 C";
                  reject(response);
            },2000);
      });
};

function music(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the music details...");
            setTimeout(function callbackThree(){
                  let response = "Katthak";
                  resolve(response);
            },1000);
      });
};

let foodResponse = food();
let weatherResponse = weather();
let musicResponse = music();


Promise.allSettled([foodResponse,weatherResponse,musicResponse]).then((data) => {console.log(data)});
