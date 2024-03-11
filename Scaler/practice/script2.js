// Coffee Shop Problem:-

function placeOrder(userOrder){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (userOrder === "coffee"){
                resolve("We have accepted your order");
            }else{
                reject("We do not serve this particular order",userOrder);
            }
        },3000);
    });
};

function processOrder(){
    return new Promise(function(resolve,reject){
        console.log("We are now processing your order...");
        setTimeout(function(){
            resolve("Order has been processed")
        },4000);
    });
};


function generateBill(userOrder){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let amount = 13.22;
            resolve(amount);
        },3000);
    });
};

placeOrder("coffee")
.then(function(data){
    console.log(data);
    return processOrder();
})
.then(function(data){
    console.log(data);
    return generateBill("coffee");
})
.then(function(data){
    console.log("Payable amount is",data);
    console.log("Have a good day");
})
.catch(function(error){
    console.log("Error is ->",error);
})