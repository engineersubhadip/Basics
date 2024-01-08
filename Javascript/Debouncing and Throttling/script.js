let inputBox = document.querySelector("input");

let count = 0;

inputBox.addEventListener("keyup",function(e){
    count +=1;

    console.log("Network Call made",count);
})