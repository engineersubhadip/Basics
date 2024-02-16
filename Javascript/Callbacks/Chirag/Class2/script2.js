// You have three asynchronous operations: fetchUserData(), fetchPostData(), 
// and fetchCommentData(). fetchPostData() depends on the result of fetchUserData(), 
// and fetchCommentData() depends on the results of both fetchUserData() and fetchPostData(). 
// Implement a Callback that fetches the data concurrently when possible but ensures the dependencies are respected.

function fetchUserData(userURL,callback){
    console.log("We are now fetching the contents of the file");
    setTimeout(function(){
        console.log("We have fetched the contents of the file");
        let data = "@peter.com";
        callback(undefined,data);
    },2000);
}

function fetchPostData(userData,callback){
    console.log("We are now fetching the posts of the user");
    setTimeout(function(){
        console.log("We have fetched the posts of the user");
        let data = [1,2,3,4];
        callback(undefined,data);
    },1500);
}

function fetchCommentData(userPosts,callback){
    console.log("We are now fetching the comments of the user");
    setTimeout(function(){
        console.log("We have fetched all the comments");
        let data = [1,2,3];
        callback(undefined,data);
    },2300);
}

fetchUserData("www.dropbox.in",function(error1,data1){
    if(error1){
        console.log("The error from fetching user data is",error1);
    }else{
        console.log("The data recovered is",data1);
        fetchPostData(data1,function(error2,data2){
            if(error2){
                console.log("The error from fetching the posts is",error2);
            }else{
                console.log("The user posts details are",data2);
                fetchCommentData(data2,function(error3,data3){
                    if(error3){
                        console.log("The error from fetching the comments is",error3);
                    }else{
                        console.log("The comments is",data3);
                        console.log("Have a good day!!!");
                    }
                })
            }
        })
    }
})