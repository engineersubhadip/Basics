// Create a system to process orders where you first validate the order details, then check the inventory to see if the items are available, and finally process the payment if everything is valid.

function processOrder(orderID,callback1){
	console.log("We are now processing your order...");
	setTimeout(function f1(){
		console.log("We have processed your order.");
		let data1 = "Latte";
		callback1(data1);
	},2000);
}

function checkInventory(orderItem,callback2){
	console.log("We are checking in the inventory...");
	setTimeout(function f2(){
		console.log("We have the item in our inventory.");
		callback2(orderItem);
	},2500);
}


function processPayment(orderItem,callback3){
	console.log("We are now processing your payment...");
	setTimeout(function f3(){
		console.log("We have processed your payment");
		let data3 = "Success";
		callback3(data3);
	},3000);
}

processOrder("X3h91",function(response1){
	console.log("You have ordered a",response1);
	checkInventory(response1,function(response1){
		processPayment(response1,function(response3){
			console.log("The payment is",response3);
		})		
	})
})