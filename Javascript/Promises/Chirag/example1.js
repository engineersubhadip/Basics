let x = new Promise(function(resolve,reject){
    let passingScore = 33;
    let currScore = 45;

    if (currScore > passingScore){
        resolve("You have passed");
    }else{
        reject("You have failed");
    }
});

console.log(x);

// x will be a promise object whose state will be FULFILLED and value as "You have passed"