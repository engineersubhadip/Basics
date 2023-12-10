// Lets say the task is to do download-write-upload 3 times,
// Then we might end up using lot of await keyword.

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
                  reject(fileName);
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


async function executor(){
      try{
            let downloadContent = await download("www.northeastern_university.com");
            console.log("The downloadable content is",downloadContent);
      
            let writeFileContent = await writeFile(downloadContent);
            console.log("The file we have written into is",writeFileContent);
      
            let uploadContent = await uploadFile("www.dropbox.com",writeFileContent);
            console.log("The response we get is",uploadContent);

            let downloadContent = await download("www.northeastern_university.com");
            console.log("The downloadable content is",downloadContent);
      
            let writeFileContent = await writeFile(downloadContent);
            console.log("The file we have written into is",writeFileContent);
      
            let uploadContent = await uploadFile("www.dropbox.com",writeFileContent);
            console.log("The response we get is",uploadContent);

            let downloadContent = await download("www.northeastern_university.com");
            console.log("The downloadable content is",downloadContent);
      
            let writeFileContent = await writeFile(downloadContent);
            console.log("The file we have written into is",writeFileContent);
      
            let uploadContent = await uploadFile("www.dropbox.com",writeFileContent);
            console.log("The response we get is",uploadContent);

      }catch(error){

            console.log("The error we received is",error);

      }finally{

            console.log("Have a good day...");
            
      }

}

executor();