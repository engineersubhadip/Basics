// * Create a animation function "continousAnimation" that continuously changes the background color of an element between red and blue.
// * The function should take the element's ID as an argument and update the background color every 500ms.

let elementID = document.querySelector("#container");

function continousAnimation(elementID){
    let currColor = elementID.style.backgroundColor;
    if (currColor === "red"){
        elementID.style.backgroundColor = "blue";
    }else{
        elementID.style.backgroundColor = "red";
    }
}

setInterval(function(){
    continousAnimation(elementID);
},500);