let showCount = document.querySelector(".show-count");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let timerId = undefined;

function startTimer(){
    let innerCount = Number(showCount.textContent);
    timerId = setInterval(function(){
        innerCount+=1;
        showCount.textContent = innerCount;
    },1000);
}

function stopTimer(timerId){
    clearInterval(timerId);
}

start.addEventListener("click",function(e){
    startTimer();
    start.setAttribute("disabled","true");
})

stop.addEventListener("click",function(){
    stopTimer(timerId);
    start.removeAttribute("disabled");
})

reset.addEventListener("click",function(e){
    stopTimer(timerId);
    showCount.textContent = 0;
    start.removeAttribute("disabled");
})