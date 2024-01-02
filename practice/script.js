let parent = document.querySelector(".parent");

parent.addEventListener("click",function(e){
    if (e.target.classList.contains("child")){
        console.log("Clicked");
    }
})