let count = 0;

function callback(){
    count+=1;
    console.log(count);
}

function debounce(callback,delay){
    let timerID = undefined;
    return function(){
        clearTimeout(timerID);
        timerID = setTimeout(function f(){
            callback();
        },delay);
    }
}

let input = document.querySelector("input");

let fxn = debounce(callback,2000);

input.addEventListener("keyup",fxn);

// input.addEventListener("keyup",function f(){
//     callback();
// })