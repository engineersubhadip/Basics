// This demonstrates the async Function always return us a Promise Object
// async function outer(){
// }
// let res = outer();
// console.log(res);

// Integrating async Await with Promises.

function getData(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching your data...");
            setTimeout(function callbackOne(){
                  console.log("We have fetched your data");
                  let response = "IFSC3491";
                  resolve(response);
            },3000)
      })
}

function getName(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the name of the user...");
            setTimeout(function callbackTwo(){
                  console.log("We have fetched the name");
                  let response = "Hrishikesh";
                  resolve(response);
            },2000)
      })
}

async function outer(){
      console.log("We are inside the Async Function");
      let data1 = await getData();
      console.log("We have fetched data 1");
      let data2 = await getName();
      console.log("We have fetched data 2");
      return [data1,data2];
}

let response = outer();
response.then((data)=>{console.log(data)});
