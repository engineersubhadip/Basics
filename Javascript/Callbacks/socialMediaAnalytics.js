// You are building a social media analytics tool that retrieves data from different endpoints. You have three asynchronous operations: fetchUserProfile(userId, callback), fetchUserPosts(userId, callback), and fetchPostComments(postId, callback).

// fetchUserProfile(userId, callback) fetches the user profile based on the given user ID.
// fetchUserPosts(userId, callback) fetches the posts of a user based on the user ID.
// fetchPostComments(postId, callback) fetches the comments for a post based on the post ID.

function fetchUserProfile(userID,callback){
    console.log("We are now fetching the details of the user...");
    setTimeout(function f1(){
        console.log("We have now fetched the user details.");
        let userDetails = "Peter Parker";
        callback(userDetails);
    },3000);
}

function fetchUserPosts(userDetails,callback){
    console.log("We are now fetching the posts of the user...");
    setTimeout(function f2(){
        console.log("We have fetched the user posts.");
        let data = ["P1","P2","P3"];
        callback(data);
    },3500);
};

function postsComments(userPosts,callback){
    console.log("We are now fetching the comments...");
    setTimeout(function f3(){
        console.log("We have fetched the comments");
        let comments = ["C1","C2","C3"];
        callback(comments);
    },2000);
}

fetchUserProfile("@parker26",function callback1(userDetails){
    console.log("The user name is",userDetails);
    fetchUserPosts(userDetails,function callback2(data){
        console.log("The posts from the user are",data);
        postsComments(data,function callback3(comments){
            console.log("The comments from the posts are",comments);
        })
    })
})