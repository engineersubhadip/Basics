let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 is resolved");
    },3000);
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("P2 is resolved");
    },4000);
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 is resolved");
    },2000);
});

Promise.customAllSettled = function(promiseArr){
    return new Promise(function(resolve,reject){
        let result = [];
        let promiseCountToBeResolved = promiseArr.length;
    
        for (let i=0; i<promiseArr.length; i++){
            Promise.resolve(promiseArr[i]) // We are trying to resolve the ith Promise
            .then(function(data){
                promiseCountToBeResolved-=1;
                result[i] = {status:"fulfilled",value:data};
                if(promiseCountToBeResolved === 0){
                    resolve(result);
                }
            })
            .catch(function(error){
                promiseCountToBeResolved-=1;
                result[i] = {status:"rejected",reason:error};
                if(promiseCountToBeResolved === 0){
                    resolve(result);
                }
            });
        }

    })
}

Promise.customAllSettled([p1,p2,p3])
.then(function(data){
    console.log(data);
})