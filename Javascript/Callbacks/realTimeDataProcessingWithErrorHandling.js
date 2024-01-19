// You are tasked with implementing a real-time data processing system. The system receives data from multiple sources simultaneously and needs to process each data point as soon as it arrives. The processing involves a series of asynchronous operations: validateData(data, callback), transformData(data, callback), and storeData(data, callback).

// validateData(data, callback): Validates the incoming data. If the data is valid, it calls the callback with the validated data; otherwise, it passes an error.

// transformData(data, callback): Transforms the validated data into a suitable format for storage. It calls the callback with the transformed data.

// storeData(data, callback): Stores the transformed data. It calls the callback to indicate the completion of the storage operation.


function validateData(data,callback){

    console.log("We are now processing your data...");

    setTimeout(function f1(){
        let errorMessage = undefined;
        let successMessage = undefined;
        let randomValue = Math.random();

        if (randomValue < 0.3){ // Error Scenario
            console.log("We cannot process your data...");
            errorMessage = new Error("Proper Encoding not possible");
            callback(errorMessage.message,successMessage);

        }else{ // Success Scenario
            console.log("We have processed your data");
            successMessage = "Pied Piper";
            callback(errorMessage,successMessage);
        }
        
    },3000);
}

function transformData(data,callback){
    console.log("We are now transforming your data...");
    setTimeout(function f2(){
        console.log("We have processed your data");
        let transformedData = "P23_98pzdreq";
        callback(transformedData);
    },2500);
}

function storeData(data,callback){
    console.log("We are now storing the data");
    setTimeout(function f3(){
        callback();
    },3500);
}

validateData("123@_34tcp5116",function callback1(error,success){
    if (error != undefined){ // We have an error message
        console.log("Error message is",error);
    }else{
        console.log("The data to be processed is",success);
        transformData(success,function callback2(data){
            console.log("The data after transformation is",data);
            storeData(data,function callback3(data){
                console.log("We have successfully stored the data");
            })
        })
    }
})