let target = document.querySelector("div");

let timerID = setTimeout(function(){
    target.style.height = "500px";
    target.style.width = "500px";
},5000);

clearTimeout(timerID);