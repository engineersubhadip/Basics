let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 is resolved");
    },3000);
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P2 is resolved");
    },4000);
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 is resolved");
    },2000);
});


// Promise.all([p1,p2,p3]).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });

// * It takes in an array of Promises.
// * It returns a Promise -> In .then we get an array of values of the fulfilled Promises.
// * In .catch -> It returns the error value of the rejected Promise.

Promise.customPromiseAll = function(promiseArray){
    return new Promise(function(resolve,reject){
        let result = [];
        let totalLength = promiseArray.length;
        for (let i=0; i<promiseArray.length; i++){

            // We will try to resolve every Promise, if not we will reject it

            promiseArray[i]

            .then(function(data){
                totalLength -=1;
                result[i] = data;
                // if (result.length === promiseArray.length){ // This line will be true always because if we are doing result[i] = data;
                //     resolve(result);
                // }

                if (totalLength === 0){ // This line will be true always because if we are doing result[i] = data;
                    resolve(result);
                }
            })

            .catch(function(error){
                reject(error); // Here we are rejecting our entire Promise.all Promise.
            });
        }
    })
}

Promise.customPromiseAll([p1,p2,p3])

.then(function(data){
    console.log(data);
})

.catch(function(error){
    console.log("Error Message is ->",error);
})


// Promise.resolve(p3)
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log("Error Message",error);
// })