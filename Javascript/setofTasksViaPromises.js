// ? Set of Tasks
// 1. Write a function to download data from a URL.
// 2. Write a function to save that downloaded data in a file and return a file name.
// 3. Write a function to upload the file written in previous step to a new url

function download(url){
      return new Promise(function exec1(resolve,reject){
            console.log("We have now started downloading your content from",url);
            setTimeout(function one(){
                  console.log("We have finished downloading the content");
                  const data = "This is the sample data";
                  resolve(data);
            },5000)
      })
}


function writeAndSave(downloadContent){
      return new Promise(function exec2(resolve,reject){
            console.log("We are now starting to save your file ...");
            setTimeout(function two(){
                  console.log("We have saved the content of the file.");
                  const fileName = "file.txt";
                  resolve(fileName);
            },4000)
      })
}


function upload(uploadUrl,file){
      return new Promise(function exec3(resolve,reject){
            console.log("We are now uploading your file",file,"at",uploadUrl);
            const message = "Success";
            resolve(message);
      })
}



download("www.sify.co.in")
.then(function downloadHandler(value){
      console.log("The downloadable content is as :-",value);
      return writeAndSave(value);
})
.then(function writeAndSaveHandler(value){
      console.log("The file we saved it as is",value);
      return upload("www.dropbox.in/",value);
})
.then(function uploadHandler(value){
      console.log("The message type is",value);
})