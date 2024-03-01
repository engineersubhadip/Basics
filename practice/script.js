async function fun(){
    let data = await Promise.resolve("Here is the data");
    console.log(data);

    let data2 = await Promise.resolve("Here is the second One");
    console.log(data2);
}

fun();

console.log(fun()); // without return and exception we always get fulfilled Promise

console.log("To be printed second");