// Lets say we have 3 independent tasks.
// Lets say we want to download data from source1, source2 and source3.
// It is not advisable that we first download from source1 , then from source2, then from source3.
//  By doing so we are making a dependency among the tasks.

// We want to parallelly download from 3 sources and these tasks are independent of each other.

function download(downloadURL,time){
      return new Promise(function exec(resolve,reject){
            console.log("We are now downloading the content from the url",downloadURL,"...");
            setTimeout(function callbackOne(){
                  console.log("We have downloaded the content from the given url.");
                  let content = "The Phoenix must burn to emerge";
                  resolve(content);
            },time);
      });
};

// Lets say we have to do 3 different downloading and these tasks should be independent of each other.

const source1 = download("www.neu.co.us",2000);
const source2 = download("www.uiuc.co.us",2000);
const source3 = download("www.asu.co.us",3000);

// Now we will wrap all the promises into a bigger Promise, on which we can have a .then
// The handler inside .then will be executed when all the promises will be fulfilled.

Promise.all([source1,source2,source3]).then((data) => {console.log("The output is",data)});