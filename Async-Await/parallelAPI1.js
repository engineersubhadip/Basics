function fetchWeather(location){
    console.log("We are trying to fetch the details of the weather..."); //1
    return new Promise(function(resolve,reject){
        setTimeout(function f1(){
            console.log("We have fetched the Weather details..."); //3
            let response = "20 Deg Cloudy";
            resolve(response);
        },3000);
    });
}

function fetchNews(location){
    console.log("We are trying to fetch the news..."); //2
    return new Promise(function(resolve,reject){
        setTimeout(function f2(){
            console.log("We have fetched the news..."); //4
            let response1 = "The town's MacDonalds has reported loss for the first time";
            resolve(response1);
        },4500);
    });
};


Promise.all([fetchWeather("Mussorie"),fetchNews("Mussorie")])
.then((data)=>console.log(data))
.catch((error)=>console.log(error));