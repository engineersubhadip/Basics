// Write a function countDownWithClear that takes a positive integer "n" as an argument. The function should log numbers from n to 1, with a delay of 1000 ms between each log. However the function should stop logging after 5s. (i.e. when it has logged for example 10,9,8,7,6).

let timerID;
let count = 1;

function countDownWithClear(userInput){
    timerID = setInterval(function(){
        if (count <= 5){
            console.log(userInput);
            userInput-=1;
        }else{
            clearInterval(timerID);
        }
        count+=1;
    },1000);
};

countDownWithClear(10);

