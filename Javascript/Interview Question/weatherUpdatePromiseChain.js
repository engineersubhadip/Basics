// Simulate a scenario where you need to make multiple API requests concurrently, 
// and the final result should be based on the combined results of all requests. 
// For example, fetching weather data from different 
// sources (fetchWeatherFromSource1(), fetchWeatherFromSource2(), etc.) and combining the results.

function fetchWeatherFromSource1(location1){
      return new Promise(function exec1(resolve,reject){
            console.log(`We are now processing the weather details from ${location1}...`); //*1
            setTimeout(function callback1(){
                  console.log(`We are done with the processing from ${location1}.`); //*2
                  let data = `${location1} 55.6F`;
                  resolve(data);
            },4000)
      })
};

function fetchWeatherFromSource2(data,location2){
      return new Promise(function exec2(resolve,reject){
            console.log(`We are now processing the data from ${location2}...`); //*3
            setTimeout(function callback2(){
                  console.log(`We are done with the processing for ${location2}`); //*4
                  let data2 = `${location2} 64.3F`;
                  let result = data + " " + data2;
                  resolve(result);
            },4000);
      })
}


fetchWeatherFromSource1("Missouri")
.then(function handler2(data){
      return fetchWeatherFromSource2(data,"Washington");
})
.then(function handler3(data){
      console.log("The final output is",data);
})

// Chicago 55.6F Minnesota 64.3F //*4


// callstack :- []
// eventqueue :- []
// runtime:-[]

// {
//       state : fulfilled;
//       value: "Chicago 55.6F Minnesota 64.3F";
// }

