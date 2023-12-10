// You have three asynchronous operations: fetchUserData(), fetchPostData(), 
// and fetchCommentData(). fetchPostData() depends on the result of fetchUserData(), 
// and fetchCommentData() depends on the results of both fetchUserData() and fetchPostData(). 
// Implement a Promise chain that fetches the data concurrently when possible but ensures the dependencies are respected.

//  * Implementation Via Promises:-

function fetchUserData(userUrl){
      // This function will return me a Promise Object with FULFILLED State and Value Subhadip_Das@123 after 3s
      return new Promise(function exec1(resolve,reject){
            console.log("We are now downloading the user data..."); //*1
            setTimeout(function one(){
                  console.log("We are done downloading the user data."); //*2
                  const userID = "Subhadip_Das@123";
                  resolve(userID);
            },3000)
      })
}


function fetchPostData(userID){
      // This function will return us a new Promise object with FULFILLED state and value as ["Subhadip_Das@123","PostID1","PostID2","PostID3"] after 5s.
      return new Promise(function exec2(resolve,reject){
            console.log("We are now downloading the Posts the user made throughout the app..."); //*3
            setTimeout(function two(){
                  console.log("We are done downloading the posts of the user."); //*4
                  const posts = ["PostID1","PostID2","PostID3"];
                  posts.unshift(userID);
                  resolve(posts);
            },5000)
      })
}


function fetchCommentData(userPosts){
            // This function will return us a new Promise object with FULFILLED state and value as ["Subhadip_Das@123","PostID1","PostID2","PostID3","Comment1","Comment2","Comment3"] after 6s.
      return new Promise(function exec3(resolve,reject){
            console.log("We are now downloading the comments data the user made through out..."); //*5
            setTimeout(function three(){
                  console.log("We are done downloading the comments data for the user."); //*6
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
.then(function fetchCommentDataHandler(userCommentData){
      console.log("The final user details are",userCommentData);
});

{
      state: fulfilled;
      value:"Subhadip_Das@123";
}

{
      state:fulfilled;
      value:["Subhadip_Das@123","PostID1","PostID2","PostID3"];
}

{
      state:fulfill;
      value:["Subhadip_Das@123","PostID1","PostID2","PostID3","Comment1","Comment2","Comment3"];
}

callstack:- [three]

microtask :- []

runTime :- []

eventque :- []

mapping :- {
      url:-"www.facebook.com"
      userID = "Subhadip_Das@123";
      posts = ["Subhadip_Das@123","PostID1","PostID2","PostID3"];
      comments = ["Comment1","Comment2","Comment3"];
      result: ["Subhadip_Das@123","PostID1","PostID2","PostID3","Comment1","Comment2","Comment3"]
      userCommentData :- ["Subhadip_Das@123","PostID1","PostID2","PostID3","Comment1","Comment2","Comment3"]


}




