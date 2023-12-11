// You need to display real-time data from multiple sources on a dashboard. Describe how you would use concurrent API calls to fetch and update this data efficiently.

function telegraph(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the data from Telegraph...");
            setTimeout(function callbackOne(){
                  let content = "This is from the Telegraph Office in Warwick";
                  resolve(content);
            },3000);
      });
};


function newYorkTimes(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching the data from the New York Times...");
            setTimeout(function callbackTwo(){
                  let content = "This is from the New York Times";
                  resolve(content);
            },5000);
      });
};

function statesman(){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching data from the statesman...");
            setTimeout(function callbackThree(){
                  let content = "This is from the statesman office in london";
                  reject(content);
            },4000);
      });
};


const sourceOne = telegraph();
const sourceTwo = newYorkTimes();
const sourceThree = statesman();

Promise.allSettled([sourceOne,sourceTwo,sourceThree]).then((data) => {
      let result = data.reduce(function(acc,curr){
            let currStatus = curr.status;
            if (currStatus == "fulfilled"){
                  acc.push(curr.value);
            }else{
                  acc.push("We were unable to fetch data from this source. Sorry");
            };

            return acc;
      },[]);

      console.log(result);
});