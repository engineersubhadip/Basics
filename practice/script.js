"use strict"

let obj = {
    name:"Stark",
    sayHello:function(){
        this.age = 45;
    }
}
let res = obj.sayHello;
res();