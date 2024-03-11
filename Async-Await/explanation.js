async function fun(){
    let p1 = await Promise.resolve("Hello There");
    console.log(p1);
}

fun().then(function(){
    console.log("Hey buddy");
});

console.log("Hello");

// Once the async function reaches the end of the code-block (i.e. inside the async function). Only then the state of the Promise object generate by the async function changes from PENDING TO FULFILLED.