let targetElement = document.querySelector(".container");
let counter = 1;



function createAnimation(elementID) {
	setInterval(function(){
		if(counter % 2 != 0){
			elementID.style.backgroundColor = "blue";
		}else{
			elementID.style.backgroundColor = "red";
		}
		counter+=1;
	},500);
}

createAnimation(targetElement);