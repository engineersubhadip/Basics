function download(downloadURL,time){
      return new Promise(function exec(resolve,reject){
            console.log("We are now downloading the content from the url",downloadURL,"...");
            setTimeout(function callbackOne(){
                  console.log("We have downloaded the content from the given url.");
                  let content = "The Phoenix must burn to emerge";
                  if (time > 2000){
                        reject("Cannot Download this");
                  }else{
                        resolve(content);
                  }
            },time);
      });
};

const source1 = download("www.neu.co.us",1500);
const source2 = download("www.uiuc.co.us",2000);
const source3 = download("www.asu.co.us",2500);

Promise.all([source1,source2,source3]).then((data) => {console.log("The data is",data)}).catch((data) => {console.log("The error is",data)});