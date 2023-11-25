// ? Set of Tasks
// 1. Write a function to download data from a URL.
// 2. Write a function to save that downloaded data in a file and return a file name.
// 3. Write a function to upload the file written in previous step to a new url

// * Using only callbacks:-

function downloadContent(url,callback1){
      console.log("Starting Download from url",url);
      setTimeout(function (){
            console.log("The url",url,"is still accessible");
            console.log("Download Complete.");
            const data = "Little Red Riding Hood";
            callback1(data);  // If we omit this line the o/p will be Starting Download From ... and then Download Complete -> Inversion Control Issue
      },4000);
}

function writeAndSaveFile(content,callback2){
      console.log("We are now saving your File....");
      setTimeout(function (){
            console.log("We are done saving your file");
            const fileName = "newDocument.txt";
            callback2(fileName);
      },6000)
}

function upload(url,file,callback3){
      console.log("We are now saving your file",file,"at",url);
      setTimeout(function (){
            console.log("We have successfully saved your File !!");
            callback3(url);
      },3000);
}

downloadContent("www.paraphrase.com",function cb1(data){
      console.log("The downloaded data is",data);
      writeAndSaveFile(data, function cb2(fileName){
            console.log("After saving your new File name is",fileName);
            upload("www.dropbox.com",fileName,function cb3(newURL){
                  console.log("We have saved your file at location",newURL);
            })
      })
})