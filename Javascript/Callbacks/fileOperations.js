// You are working on a file processing system. The system needs to perform the following asynchronous tasks:

// Read File: readFile(filePath, callback): Reads the content of a file and calls the callback with the file content.

// Process Data: processData(data, callback): Processes the data read from the file and calls the callback with the processed result.

// Write File: writeFile(filePath, processedData, callback): Writes the processed data to a new file and calls the callback upon completion.

function readFile(filePath,callback){
    console.log("We are now reading the content of the File...");
    setTimeout(function f1(){
        console.log("We have read the content of the file");
        let content = "Captain Jack went for the Black Pearl";
        callback(content);
    },3000);
};

function processData(data,callback){
    console.log("We are now processing your data...");
    setTimeout(function f2(){
        let result = "";
        data = data.split(" ");
        for (let i=0;i<data.length;i++){
            result += data[i][0];
        }
        console.log("We have processed your data");
        callback(result);
    },3000);
};

function writeFile(processedData,callback){
    console.log("We are now writing the content of the file...");
    setTimeout(function f3(){
        console.log("We have written the content of the file");
        let content = "XC34v#21";
        callback(content);
    },3500);
};

readFile("www.dropbox.co.in",function callback1(data){
    console.log("The content of the file is",data);
    processData(data,function callback2(data){
        console.log("The processed data is",data);
        writeFile(data,function callback3(data){
            console.log("The encrypted data is",data);
        })
    })
})