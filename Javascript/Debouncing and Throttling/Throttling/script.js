// Conventional Approach :-
let btn = document.querySelector("button");
let count = 0;

function work(){
    count+=1;
    console.log("Count is",count);
}

// btn.addEventListener("click",work);

// Mitigate via Throttling :-

function throttle(work,delay){
    let flag = true;
    return function optimizedFunc(){
        if (flag){
            flag = false;
            timerID = setTimeout(function(){
                work();
                flag = true;
            },delay);
        }
    }
}

let optFunc = throttle(work,2000);

btn.addEventListener("click",optFunc);