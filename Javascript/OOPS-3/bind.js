let person1 = {
    name:"Tharun",
    age:25,
    greet:function(batch1,batch2){
        this.batch1 = batch1;
        this.batch2 = batch2;
    }
}

person1.greet("Web","DSA");

let person2 = {
    name:"Aman",
    age:26
}

let result = person1.greet.bind(person2);
console.log(result)

result("June","July");

console.log(person2)