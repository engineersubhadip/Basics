function test(){
    console.log(this);
}

let obj = {
    name:"Atul",
    age:17
}

obj.myTest = test;

console.log(obj);