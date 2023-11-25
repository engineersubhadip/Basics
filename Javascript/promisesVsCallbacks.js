// ? Set of Tasks
// 1. Write a function to download data from a URL.
// 2. Write a function to save that downloaded data in a file and return a file name.
// 3. Write a function to upload the file written in previous step to a new url

// * Using only callbacks:-

function download(url,callback1){
      console.log("We are now starting the download of your file..."); //*1
      setTimeout(function one(){
            console.log("We have finished downloading the content of the file.");  //*2
            const message = "This is the sample message";
            callback1(message);
      },6000)
}

function writeAndSave(downloadContent,callback2){
      console.log("We are now starting to save the content of your file..."); //*4
      setTimeout(function two(){
            console.log("We are done saving the content of the file.") //*5
            const fileName = "sampleFile.txt";
            callback2(fileName);
      },5000)
}

function upload(url,fileName,callback3){
      console.log("We are now uploading your file",fileName,"at",url); //*7
      setTimeout(function three(){
            console.log("We have uploaded the content of the file at",url); //*8
            const message = "Success";
            callback3(message);
      },3000)
}


download("www.sify.co.in",function cb1(downloadContent){
      console.log("The downloaded content is",downloadContent); //*3
      writeAndSave(downloadContent,function cb2(fileName){
            console.log("The returned file Name is",fileName); //*6
            upload("www.dropbox.co.in",fileName,function cb3(response){
                  console.log("The message response is",response); //*9
            })
      })
})

console.log("---------------------------------------------------------------")

// mapping:-
// [
// url:-"www.dropbox.co.in"
// callback1:- cb1
// downloadContent:-"This is the sample message"
// callback2:-cb2;
// fileName:- sampleFile.txt
// callback3:- cb3;
// response:-Success

// ]

// callstack:-
// [




// ]

// eventqueue:-
// [
//       three
// ]

// runtime:-
// [
// :- 3s;

// ]