let target = document.querySelector("div");

let timerID = setTimeout(function(){
    target.style.height = "500px";
    target.style.width = "500px";
},5000);

let button = document.querySelector("button");

button.addEventListener("click",function(){
    clearTimeout(timerID);
})
