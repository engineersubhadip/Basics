let btn = document.querySelector("button");
let count = 0;

btn.addEventListener("click",function(e){
    count+=1;
    console.log("Count is ",count);
})