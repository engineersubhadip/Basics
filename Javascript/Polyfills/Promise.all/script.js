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


Promise.all([p1,p2,p3]).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});
