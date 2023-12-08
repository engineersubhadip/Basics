function download(url){
      return new Promise(function exec(resolve,reject){
            console.log("We are now downloading the data from...",url);
            setTimeout(function down(){
                  console.log("We are done downloading the data.");
                  let content = "The quick brown fox";
                  resolve(content);
            },6000);
      })
}


function writeFile(data){
      return new Promise(function exec(resolve,reject){
            console.log("We are now writing the data...",data);
            setTimeout(function write(){
                  console.log("We are done writing the data.");
                  let fileName = "file.txt";
                  resolve(fileName);
            },5000);
      })
}


function uploadData(fileName,uploadUrl){
      return new Promise(function exec(resolve,reject){
            console.log("We are now uploading the content from",fileName,"to",uploadUrl);
            setTimeout(function up(){
                  console.log("We are done uploading the content");
                  let response = "SUCCESS";
                  resolve(response);
            },2000);
      })
}

// function callback(value){
//      let future =  iter.next(value);
//      future.value.then(callback)
// }
// 


function* steps(){
      const downloadedData = yield download("www.google.com");
      console.log("The data downloaded is",downloadedData);

      const writeData = yield writeFile(downloadedData);
      console.log("The file name is",writeData);

      const uploadResponse = yield uploadData(writeData,"www.dropbox.co.in");
      console.log("The upload response is",uploadResponse);

      return uploadResponse;
}

const iter = steps();

const future = iter.next();

future.value
.then(function callback(data){
      let result = iter.next(data)
      return result.value;
})
.then(function callback(data){
      let result = iter.next(data);
      return result.value;
})
.then(function callback(data){
      let result = iter.next(data);
      return result.value;
})
