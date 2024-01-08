// The problem with the conventional approach :-

let inputBox = document.querySelector("input");
let count = 0;

function work(){
    count +=1;
    console.log("Network Call",count);
}

// inputBox.addEventListener("keyup",work);

// Method 1:- Debouncing

function debounce(work,delay){
    let timerID;
    return function optFn(){
        clearTimeout(timerID);
        timerID = setTimeout(function(){
            work();
        },delay);
    };
};

let optimizedFn = debounce(work,3000);

inputBox.addEventListener("keyup",optimizedFn);
