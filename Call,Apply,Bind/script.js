let obj1 = {
    name:"Subhadip",
    age:29,
    setDetails:function(country,interest){
        this.country = country;
        this.interest = interest;
    }
}

obj1.setDetails.call(obj1,"India","Pottery");

console.log(obj1);