// You are building a system that validates and transforms user data received from a form submission. The user data includes the user's name, email, and age. The system needs to perform the following tasks asynchronously:

// Validate Name: validateName(name, callback): Validates the user's name and calls the callback with the validation result.

// Validate Email: validateEmail(email, callback): Validates the user's email address and calls the callback with the validation result.

// Validate Age: validateAge(age, callback): Validates the user's age and calls the callback with the validation result.

// Transform Data: transformData(name, email, age, callback): Transforms the validated user data and calls the callback with the transformed result.

function validateName(name,callback){
    console.log("We are validating the user name...");
    setTimeout(function f1(){
        let errorMessage = undefined;
        let successMessage = undefined;
        let randomVal = Math.random();

        if (randomVal < 0.3){
            errorMessage = new Error("Encryption failed");
            callback(errorMessage.message,successMessage);
        }else{
            successMessage = "Peter@31";
            callback(errorMessage,successMessage);
        }
    },3000);
};

function validateEmail(email,callback){
    console.log("We are now validating the email...");
    setTimeout(function f2(){
        let errorMessage = undefined;
        let successMessage = undefined;
        let randomVal = Math.random();
        
        if (randomVal < 0.4){
            errorMessage = new Error("Encryption failed for email");
            callback(errorMessage.message,successMessage);
        }else{
            successMessage = "Peter@hotmail.com/55.Xcve";
            callback(errorMessage,successMessage);
        }
    },3000);
};

function validateAge(age,callback){
    console.log("We are now validating the age...");
    setTimeout(function f3(){
        let errorMessage = undefined;
        let successMessage = undefined;
        let randomVal = Math.random();

        if (randomVal < 0.4){
            errorMessage = new Error("Encryption failed for age");
            callback(errorMessage.message,successMessage);
        }else{
            successMessage = 32000;
            callback(errorMessage,successMessage);
        }
    },3000);
};


function transformData(name,email,age,callback){
    console.log("We are now transforming your data");
    setTimeout(function f4(){
        let errorMessage = undefined;
        let successMessage = undefined;
        let randomVal = Math.random();
        
        if (randomVal < 0.6){
            errorMessage = new Error("Encryption failed for final combination");
            callback(errorMessage.message,successMessage);
        }else{
            successMessage = `${name} ${email} ${age}`;
            callback(errorMessage,successMessage);
        };
    },4000);
}

validateName("Peter Drinkwater", function callback1(error1,success1){
    if (error1 != undefined){ // This is an error scenario
        console.log("The error message is",error1);
    }else{
        console.log("The encrypted name is",success1);
        validateEmail("peter77@hotmail.com",function callback2(error2,success2){
            if (error2 != undefined){ // This is an error scenario
                console.log("The error message is",error2);
            }else{
                console.log("The encrypted email is",success2);
                validateAge(32,function callback3(error3,success3){
                    if (error3 != undefined){ // This is an error scenario
                        console.log("The error message is",error3);
                    }else{
                        console.log("The encrypted age is",success3);
                        transformData(success1,success2,success3,function callback4(error4,success4){
                            if (error4 != undefined){ // This is an error scenario
                                console.log("The error message is",error4);
                            }else{
                                console.log("We were able to process everything");
                                console.log("The final result is",success4);
                            }
                        })
                    }
                })
            }
        })
    }
})