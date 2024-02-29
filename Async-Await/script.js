// You have three asynchronous operations: fetchUserData(), fetchPostData(), 
// and fetchCommentData(). fetchPostData() depends on the result of fetchUserData(), 
// and fetchCommentData() depends on the results of both fetchUserData() and fetchPostData(). 
// Implement a Promise chain that fetches the data concurrently when possible but ensures the dependencies are respected.

function fetchUserData(){
    return new Promise(function(resolve,reject){
        console.log("We are now fetching the details of the user...");
        setTimeout(function(){
            console.log("We have fetched the details of the user.");
            let data = "david@silva_mcity";
            resolve(data);
        },2000);
    });
};


function fetchPostData(userID){
    return new Promise(function(resolve,reject){
        console.log("We are now fetching the posts for the user...");
        setTimeout(function(){
            console.log("We have fetched the posts for the user.");
            let data = ["Post1","Post2","Post3","Post4"];
            reject(data);
        },3000);
    });
};

function fetchCommentData(userID,userPosts){
    return new Promise(function(resolve,reject){
        console.log("We are now fetching the comments for the user...");
        setTimeout(function(){
            console.log("We have fetched the comments for the user.");
            let data = ["C1","C2","C3","C4","C5"];
            resolve(data);
        },1800);
    });
};


async function executor(){
    console.log("We are now starting off with the execution");

    try{
        let userID = await fetchUserData();
        console.log("The user ID is",userID) ;
        let postData = await fetchPostData(userID);
        console.log("The user's post data is ->",postData);
        let commentData = await fetchCommentData(userID,postData);
        console.log("The user's comment data is ->",commentData);
    }catch(error){
        console.log("The error we encountered is",error);
    }
}

executor();