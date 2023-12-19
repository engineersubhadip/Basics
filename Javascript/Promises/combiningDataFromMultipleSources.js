// Combining Data from Multiple Sources:
// You have data distributed across different APIs, and you need to combine and transform this data before using it in your application. How would you approach this task using concurrent API calls?

function location(targetLocation,delay){
      return new Promise(function exec(resolve,reject){
            console.log("We are now fetching data for",targetLocation,"...");
            setTimeout(function callback(){
                  let content = targetLocation + " " + "22.3 C";
                  reject(content);
            },delay);
      });
};

async function executor(){
      try{
            console.log("Starting to boot up...");
            let resultOne = await location("Chicago",3000);
            console.log("We have fetched the data.");
      
            let resultTwo = await location("Washington",4000);
            console.log("We have fetched the data.");
      
            let resultThree = await location("Missouri",2000);
            console.log("We have fetched the data.");
      
            return [resultOne,resultTwo,resultThree];

      }catch(error){
            return Promise.reject("Error In API Fetching...");
      };

}

// executor()
// .then(function(data){
//       let finalResult = data.reduce(function(acc,curr){
//             acc = acc+" "+curr;
//             return acc;
//       },"");

//       console.log(finalResult);
// })
// .catch((data) => {console.log(data)});


async function main(){
      try{
            let response = await executor();
            console.log("The executor returned Success");
      }
      catch(error){
            console.log(error);
      }
}

main();