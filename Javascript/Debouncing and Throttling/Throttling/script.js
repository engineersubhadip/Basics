// Conventional Approach :-

let btn = document.querySelector("button");
let count = 0;


function work(){
    count+=1;
    console.log("Count is",count);
}

btn.addEventListener("click",work);

// Mitigate via Throttling :-

