new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("We will be printing second");
    },10000);
})
.then(function(data){
    console.log("The data from the Promise Object is ->",data);
})
.catch(function(error){
    console.log("The error from the Promise Object is ->",error);
})


setTimeout(function(){
    console.log("I am going to get printed first");
});