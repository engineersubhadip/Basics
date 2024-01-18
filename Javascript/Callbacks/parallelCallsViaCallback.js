// Write a function that downloads data from an URl
// Write a function that saves the downloaded data in a file and return the file name.
// Write a function that uploads the file written in previous step to a new URL.

function download(url,callback){
    console.log("We are now starting to download data from the url...");
    setTimeout(function f1(){
        console.log("We have downloaded data from the url");
        let content = "Little Red";
        callback(content);
    },3000);
};

function saveFile(downloadableContent,callback){
    console.log("We are now saving the downloaded data");
    setTimeout(function f2(){
        console.log("We have saved the data");
        let fileName = "doc.txt";
        callback(fileName);
    },2000);
};

function upload(fileName,callback){
    console.log("We are now uploading the File");
    setTimeout(function (){
        console.log("We have uploaded the file");
        let newUrl = "www.dropbox.in";
        callback(newUrl);
    },2500);
};

download("www.google.com",function callback1(content){
    console.log("The data downloaded is",content);
    saveFile(content,function callback2(data){
        console.log("The file Name is",data);
        upload(data,function callback3(newUrl){;
            console.log("The file has been uploaded to",newUrl);
        })
    });
});