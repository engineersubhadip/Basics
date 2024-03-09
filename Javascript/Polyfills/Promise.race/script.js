
let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 is getting resolved in 4s");
    },4000);
});

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("P2 is getting resolved in 3s");
    },3000);
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 is getting resolved in 5s");
    },5000);
});

Promise.race([p1,p2,p3])
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error message is ->",error);
})

// * Architecture :- Promise.race takes in array of Promises. Whichever Promises settles ->(fulfills/rejects) first, the value of that promise object will be shown
// * It returns a Promise Object with the promise value being the first settled Promise.


