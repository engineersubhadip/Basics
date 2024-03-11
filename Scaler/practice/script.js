// * Coffee Shop Problem via the usage of Async-Await

function placeOrder(userOrder){
	return new Promise(function(resolve,reject){
		console.log("We are checking in our inventory if the order can be placed or not...");
		setTimeout(function(){
			if(userOrder === "coffee"){
				resolve("We have accepted your order.");
			}else{
				reject("We do not serve this drink.")
			}
		},3000);
	});
};

function processOrder(){
	return new Promise(function(resolve,reject){
		console.log("We are now processing your order...");
		setTimeout(function(){
			resolve("Order has been processed");
		},4000);
	});
};

function generateBill(){
	return new Promise(function(resolve,reject){
		console.log("We are now generating the bill...");
		setTimeout(function(){
			let amount = 12.99;
			resolve(amount);
		},3000);
	});
};

async function simulateOrderScenario(userInput){
	console.log("Booting up the scenario...");
	try{
		let placeOrderResponse = await placeOrder(userInput);
		console.log(placeOrderResponse);
	
		let processOrderResponse = await processOrder();
		console.log(processOrderResponse);
	
		let generateBillResponse = await generateBill();
		console.log(generateBillResponse);
	}
	catch(error){
		console.log("The error is ->",error);
	}
	console.log("Have a good day");
}

simulateOrderScenario("Tea");