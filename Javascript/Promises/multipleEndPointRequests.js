// Imagine you need to fetch data from three different API endpoints: users, posts, and comments. How would you use async/await and Promise.all to make concurrent requests to these endpoints and aggregate the results?

//  I shall not be using async-await for this use case. As currently I do not know how to integrate async await with Promise.all.

function user(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the list of users...");
            setTimeout(function callbackOne(){
                  let content = ["user1","user2","user3"];
                  resolve(content);
            },3000);
      });
};

function posts(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the list of Posts...");
            setTimeout(function callbackTwo(){
                  let content = ["This is good","How much is the price ?","What is the return date ?"];
                  resolve(content);
            },4000);
      });
};

function comments(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the comments...");
            setTimeout(function callbackThree(){
                  let content = ["C1","C2","C3"];
                  resolve(content);
            },3500);
      });
};

const sourceOne = user();
const sourceTwo = posts();
const sourceThree = comments();


Promise.all([sourceOne,sourceTwo,sourceThree]).then((data) => {console.log("Retrieved data",data)}).catch((data) => {console.log("The error is",data)});