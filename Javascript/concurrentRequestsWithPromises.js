// You have three asynchronous operations: fetchUserData(), fetchPostData(), 
// and fetchCommentData(). fetchPostData() depends on the result of fetchUserData(), 
// and fetchCommentData() depends on the results of both fetchUserData() and fetchPostData(). 
// Implement a Promise chain that fetches the data concurrently when possible but ensures the dependencies are respected.

//  * Implementation Via Promises

function fetchUserData(userUrl){
      // This function will return me a Promise Object with FULFILLED State and Value Subhadip_Das@123 after 3s
      return new Promise(function exec1(resolve,reject){
            console.log("We are now downloading the user data...");
            setTimeout(function one(){
                  console.log("We are done downloading the user data.");
                  const userID = "Subhadip_Das@123";
                  resolve(userID);
            },3000)
      })
}


function fetchPostData(userID){
      // This function will return us a new Promise object with FULFILLED state and value as ["Subhadip_Das@123","PostID1","PostID2","PostID3"] after 5s.
      return new Promise(function exec2(resolve,reject){
            console.log("We are now downloading the Posts the user made throughout the app...");
            setTimeout(function two(){
                  console.log("We are done downloading the posts of the user.");
                  const posts = ["PostID1","PostID2","PostID3"];
                  posts.unshift(userID);
                  resolve(posts);
            },5000)
      })
}


function fetchCommentData(userPosts){
            // This function will return us a new Promise object with FULFILLED state and value as ["Subhadip_Das@123","PostID1","PostID2","PostID3","Comment1","Comment2","Comment3"] after 6s.
      return new Promise(function exec3(resolve,reject){
            console.log("We are now downloading the comments data the user made through out...");
            setTimeout(function three(){
                  console.log("We are done downloading the comments data for the user.");
                  const comments = ["Comment1","Comment2","Comment3"];
                  const result = userPosts.concat(comments);
                  resolve(result);
            },6000)
      })
}

fetchUserData("www.facebook.com")
.then(function fetchUserDataHandler(userID){
      return fetchPostData(userID);
})
.then(function fetchPostDataHandler(userPosts){
      return fetchCommentData(userPosts);
})
.then(function fetchCommentData(userCommentData){
      console.log("The final user details are",userCommentData);
})