let elementList = document.querySelectorAll("li");
let referenceNode;
let parent = document.querySelector(".container");

for (let i=1; i<elementList.length; i++){

    if(Number(elementList[i].innerText) - Number(elementList[i-1].innerText) !== 1){
        referenceNode = elementList[i];
        break;
    };
};


let newNode = document.createElement("li");
newNode.innerText = "4";

// console.log(referenceNode.innerText);
parent.insertBefore(newNode,referenceNode);