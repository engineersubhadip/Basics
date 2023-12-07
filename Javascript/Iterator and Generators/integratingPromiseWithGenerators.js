function download(url){
      return new Promise(function exec(resolve,reject){
            console.log("We are now downloading the data from...",url);
            setTimeout(function down(){
                  console.log("We are done downloading the data.");
                  let content = "The quick brown fox";
                  resolve(content);
            },6000)
      })
}


function writeFile(data){
      return new Promise(function exec(resolve,reject){
            console.log("We are now writing the data...",data);
            setTimeout(function up(){
                  console.log("We are done writing the data.");
                  let fileName = "file.txt";
                  resolve(fileName);
            },5000)
      })
}


function uploadData(fileName,uploadUrl){
      return new Promise(function exec(resolve,reject){
            console.log("We are now uploading the content from",fileName,"to",uploadUrl);
            setTimeout(function up(){
                  console.log("We are done uploading the content");
                  let response = "SUCCESS";
                  resolve(response);
            },2000)
      })
}



