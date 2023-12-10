// Sceanrio :- Given a URL we download content from that URL. Write the content to a file. Upload the file to a URL.

function download(downloadURL){
      return new Promise(function exec(resolve,reject){
            console.log("We are now downloading the content from the url",downloadURL,"...");
            setTimeout(function callbackOne(){
                  console.log("We have downloaded the content from the given url.");
                  let content = "The Phoenix must burn to emerge";
                  resolve(content);
            },4000);
      });
};

function writeFile(downloadContent){
      return new Promise(function exec(resolve,reject){
            console.log("We are now writing the content to a file...");
            setTimeout(function callbackTwo(){
                  console.log("We have written the content to the file.");
                  let fileName = "file.txt";
                  resolve(fileName);
            },3000);
      });
};

function uploadFile(uploadURL,writeFileName){
      return new Promise(function exec(resolve, reject){
            console.log("We are now uploading the file to the url",uploadURL,"...");
            setTimeout(function callbackThree(){
                  console.log("We have uploaded the file to the provided url.");
                  let response = "Success";
                  resolve(response);
            },2000);
      });
};


download("www.socerrerssupreme.hvd")
.then(function handlerOne(data){
      console.log("The data downloaded is",data);
      return writeFile(data);
})
.then(function handlerTwo(data){
      console.log("The file in which it is written is",data);
      return uploadFile("www.googleDrive.com",data);
})
.then(function handlerThree(data){
      console.log("Your file has been",data,"-fully uploaded");
})