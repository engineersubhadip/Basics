function download(userUrl,callback){
    console.log("We are now downloading from the URL",userUrl);
    setTimeout(function f1(){
        console.log("We have downloaded the content");
        let content = "Ishq Nachawe";
        callback(content);
    },3000);
}


function saveContent(content,callback){
    console.log("We are now saving the content...");
    setTimeout(function f2(){
        callback();
    },2000);
}

function uploadContent(content,uploadURL,callback){
    console.log("We are now uploading the content to ->",uploadURL);
    setTimeout(function f3(){
        console.log("We have uploaded the content");
        let message = "Success";
        callback(message);
    },2000);
}

download("www.gyfl.co.in",function cb1(content){
    console.log("The downloaded content is ->",content);
    saveContent(content,function cb3(){
        console.log("We have saved the content");
        uploadContent(content,"www.dropbox.co",function cb2(message){
            console.log("We have uploaded the content");
            console.log("The message is ->",message);
        });
    });
});