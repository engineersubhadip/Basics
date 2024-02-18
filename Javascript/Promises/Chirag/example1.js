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

x.then(function f1(data){
    console.log(data);
})
.catch(function f2(err){
    console.log(err);
});

// .then will be executed ONCE THE PROMISE resolves
// .catch will be executed ONCE THE PROMISE rejects