function sleep(delay){
    delay = delay *1000;
    return new Promise(function(resolve,reject){
    setTimeout(function f(){
    resolve();
    },delay)
    })
}
async function x(){
    console.log(1)
    await sleep(5)
    console.log(8);
}


x();