// You have three asynchronous operations: fetchUserData(), fetchPostData(), 
// and fetchCommentData(). fetchPostData() depends on the result of fetchUserData(), 
// and fetchCommentData() depends on the results of both fetchUserData() and fetchPostData(). 
// Implement a Promise chain that fetches the data concurrently when possible but ensures the dependencies are respected.

function fetchUserData(userURL,callback1){
      console.log("We are now downloading the userID...");
      setTimeout(function one(){
            console.log("We are done downloading the userID.");
            const userID = "SubhadipDas@123";
            callback1(userID);
      },3000)
}


function fetchPostData(userID,callback2){
      console.log("We are now downloading the posts for the user...");
      setTimeout(function two(){
            console.log("We are done downloading the posts the user made");
            const posts = ["Post1","Post2","Post3"];
            posts.unshift(userID);
            callback2(posts);
      },4000)
}

function fetchCommentData(posts,callback3){
      console.log("We are now downloading the comments of the user.");
      setTimeout(function three(){
            console.log("We are done downloading the comments of the user.");
            const comments = ["Comment1","Comment2","Comment3"];
            const result = posts.concat(comments);
            callback3(result);
      },5000)
}

fetchUserData("www.facebook.com",function cb1(userID){
      fetchPostData(userID,function cb2(posts){
            fetchCommentData(posts,function cb3(userDetails){
                  console.log("Here are the user Details",userDetails);
            })
      })
})
