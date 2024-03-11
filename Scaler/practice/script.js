let timerID;

function countDown(userInput){
	let target = userInput-5;
	timerID = 	setInterval(function(){
					if (userInput === target){
						clearInterval(timerID);
					}else{
						console.log(userInput);
						userInput-=1;
					}
				},1000);
}

countDown(12);