// Imagine you are building an online shopping checkout system. You have three asynchronous operations:

// validateUserCart(cartId, callback): Validates the user's shopping cart based on the provided cart ID.
// calculateTotal(cartId, callback): Calculates the total price of items in the user's cart.
// processPayment(totalAmount, paymentMethod, callback): Processes the payment for the calculated total amount using the specified payment method.

function validateUserCart(cartID,callback){
    console.log("We are now validating the user Id");
    setTimeout(function f1(){ // This callback ensures that using some method we are validating the user Cart after 2s
        console.log("We have validated the user Id");
        callback(cartID);
    },2000);
};

function calculateTotal(cartID,callback){
    console.log("We are now calculating the total cost for the cart id...");
    setTimeout(function f2(){ // This callback will calculate the total cost for the cartID and return the total cost for that ID
        console.log("We have calculated the total cost");
        let total = 25000;
        callback(total);
    },2500);
};

function processPayment(totalAmount,paymentMethod,callback){
    console.log("We are now processing your method");
    setTimeout(function f3(){ // This callback will make sure we have processed the payment via the medium after a certain delay
        console.log("We have now processed your payment");
        callback();
    },3000);
};

validateUserCart(1238213,function callback1(error,data){
    calculateTotal(data,function callback2(total){
        console.log("Your total Bill is",total);
        processPayment(total,"UPI",function callback3(){
            console.log("Have a great day !");
        })
    })
})
