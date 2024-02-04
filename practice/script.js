function calculate(a,b){
    return a+b;
}

let obj1 = {
    val1:10,
    val2:20
}

let obj2 = {
    val1:22,
    val2:33
}

console.log(calculate.call(obj1,obj1.val1,obj1.val2));

console.log(calculate.call(obj2,obj2.val1,obj2.val2));

