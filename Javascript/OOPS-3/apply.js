let person1 = {
    name:"Tharun",
    age:25,
    greet:function(batch1,batch2){
        // console.log("Value of this keyword is",this);
        this.batch1 = batch1;
        this.batch2 = batch2;
    }
}

person1.greet("Web","DSA");

let person2 = {
    name:"Aman",
    age:26
}

person1.greet.apply(person2,["June","Feb"]);

console.log(person2)