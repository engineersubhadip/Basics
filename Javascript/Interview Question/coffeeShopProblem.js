/*
You go to a coffee Shop and place your Order. The clerk checks in the DB, whether your order can be accepted or not.
Once that is done, the clerk processes your order and serves you the order.
Once that is done, he generates a bill and you pay for it.
*/


function placeOrder(order){
      return new Promise(function exec(resolve,reject){
            console.log("We are checking if your order of",order,"is present or not..."); //*1
            setTimeout(function callbackOne(){
                  console.log("Search Complete !"); //*2
                  if (order == "coffee"){
                        let response = "YES !!";
                        resolve(response);
                  }else{
                        let response = "NO";
                        reject(response);
                  }
            },3000)
      })
}


function processOrder(placeOrderResponse){
      return new Promise(function exec(resolve,reject){
            console.log("We are now preparing to process your order..."); //*3
            setTimeout(function callbackTwo(){
                  console.log("We have now processed your order."); //*4
                  let response = "Please take your order";
                  resolve(response);
            },3000)
      })
}


function orderBilling(processOrderResponse){
      return new Promise(function exec(resolve,reject){
            console.log("We are printing your Bill..."); //*6
            setTimeout(function callbackThree(){
                  console.log("We are done printing your bill."); //*7
                  let response = "$"+"13.45";
                  resolve(response);
            },2000)
      })
}


placeOrder("tea")
.then(function one(data){
      return processOrder(data)
})
.catch(function oneReject(errorMessage){
      console.log("Order cannot be placed");
})
.then(function two(data){
      console.log(data); //*5
      return orderBilling(data);
})
.then(function three(data){
      console.log("Your Bill is",data); //*8
      
})



// callstack :- []

// runTime :- []

// callbackque :- []

// microtask :- []

// {
//       state : reject;
//       value : no
// }

// process:- {
//       state : fulfill;
//       value:"Please take your order";
// }

// orderBilling : {
//       state:fulfill;
//       value:$13.45
// }




