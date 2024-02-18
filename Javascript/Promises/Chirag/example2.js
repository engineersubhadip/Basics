new Promise(function(resolve,reject){
    let passingScore = 33;
    let currScore = 45;

    setTimeout(function(){
        if (passingScore < currScore){
            resolve("You have passed");
        }else{
            reject("You have failed");
        }
    },5000);
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

