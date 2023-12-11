// Suppose there is a dependency between the results of two API requests, where the second request requires data from the first one. How would you handle this situation using async/await and concurrent API calls?

function download(userURL){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the data from the url",userURL);
            setTimeout(function callbackOne(){
                  let content = "There is no special ingredient";
                  resolve(content);
            },3000);
      });
};

function writeFile(downloadContent){
      return new Promise(function exec(resolve,reject){
            console.log("We are now writing data into the file...");
            setTimeout(function callbackTwo(){
                  let content = "file.txt";
                  resolve(content);
            },2000);
      });
};

async function executor(){

      try{
            console.log("Welcome to the executor function");
            let downloadContent = await download("www.shangrila.tbt");
            console.log("We have downloaded the content...");
      
            let fileName = await writeFile(downloadContent);
            console.log("We have written the content in the file.");
            console.log("The final file is",fileName);
      }
      catch(error){
            console.log("The error is",error);
      }
      finally{
            console.log("Have a great day");
      };

};

executor();