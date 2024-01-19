// You are tasked with building a system that interacts with a database. The system needs to perform the following asynchronous operations:

// Query User Data: queryUserData(userId, callback): Queries user data from the database based on the given user ID and calls the callback with the result.

// Query Posts: queryPosts(userId, callback): Queries posts made by a user based on the user ID and calls the callback with the result.

// Query Comments: queryComments(postId, callback): Queries comments for a post based on the post ID and calls the callback with the result.

// Process Data: processData(userData, postsData, commentsData, callback): Processes the queried data and calls the callback with the final result.


function userData(userID,callback){
    console.log("We are now fetching the user details...");
    setTimeout(function f1(){
        console.log("We have fetched the user details.");
        let content = "Professor Albus Dumbledore";
        callback(content);
    },3000);
};

function userPost(userID,callback){
    console.log("We are now fetching the user posts...");
    setTimeout(function f2(){
        console.log("We have fetched the posts from the user");
        let content = "Griffindor";
        callback(content);
    },3000);
};

function userComment(postID,callback){
    console.log("We are now fetching the comments from the user...");
    setTimeout(function f3(){
        console.log("We have now fetched the comments from the user.");
        let content = "Harry Potter shall survive !";
        callback(content);
    },2500);
};

function processData(userData,postData,commentData,callback){
    console.log("We are now compiling everything...");
    setTimeout(function f4(){
        console.log("We have compiled everything.");
        let result = "";
        result += userData[0]+postData[0]+commentData[0];
        callback(result);
    },4000);
};

function finalOutcome(userID,callback){ // This function will start up the Engine
    let randomVal = Math.random();
    let error = undefined;
    let success = undefined;
    if (randomVal < 0.4){
        error = new Error("Firing failed");
        callback(error.message,success);
    }else{
        success = "Starting to fire up...";
        callback(error,success);
    }
};


finalOutcome("123AlbuDumble",function callback(error,success){
    if (error != undefined){
        console.log("We have error because of",error);
    }else{
        console.log(success);
        userData("123AlbuDumble",function callback1(data1){
            console.log("The user detail is of",data1);
            userPost("123AlbuDumble",function callback2(data2){
                console.log("The posts from the user are",data2);
                userComment(data2,function callback3(data3){
                    console.log("The comments from the user are",data3);
                    processData(data1,data2,data3,function callback4(data){
                        console.log("The final outcome is",data);
                    });
                });
            });
        });
    }
})