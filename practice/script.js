async function fun(){
    let data = await Promise.resolve("Here is the data");
    console.log(data);
}

fun();

console.log(fun());

console.log("To be printed second");