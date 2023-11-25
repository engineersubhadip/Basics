// You have three API endpoints: /user, /posts, and /comments. 
// Implement a Promise chain that fetches data from these endpoints sequentially 
// (one after the other) and logs the final result.

function userDetails(userUrl){
      return new Promise(function exec1(resolve,reject){
            console.log("We are now downloading data about the user from the url",userUrl);
            setTimeout(function one(){
                  console.log("We are done downloading the user data.");
                  const data = "Subhadip Das";
                  resolve(data);
            },3000);
      });
};


function userPosts(userName){
      return new Promise(function exec2(resolve,reject){
            console.log("We are now downloading the posts from the user...");
            setTimeout(function two(){
                  console.log("We are done downloading the user posts data.");
                  const posts = ["Post1","Post2","Post3"];
                  posts.unshift(userName);
                  resolve(posts);
            },6000);
      });
};

function userComments(userPosts){
      return new Promise(function exec3(resolve,reject){
            console.log("We are downloading the contents of the user comments...");
            setTimeout(function three(){
                  console.log("We are done downloading the user comments.");
                  const comments = ["Comment1","Comment2","Comment3"];
                  const finalOutput = userPosts.concat(comments);
                  resolve(finalOutput);
            },4000);
      });
};

userDetails("www.pinterest.com")
.then(function userDetailsHandler(userDetailsValue){
      console.log("The name of the user is",userDetailsValue);
      return userPosts(userDetailsValue);
})
.then(function userPostHandler(userPostValue){
      console.log("The details gathered till now is",userPostValue);
      return userComments(userPostValue);
})
.then(function userCommentsHandler(userCommentsValue){
      console.log("The final details for the user is",userCommentsValue);
})