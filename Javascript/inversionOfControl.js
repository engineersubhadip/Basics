function contentDownloader(url,callBack){
      setTimeout(function exec(){
            let data = "Dummy Data";
            callBack(data);
            console.log("Completed the downloading");
      },5000)
}

contentDownloader("www.glee.com",function cb(data){
      console.log("The content is",data);
})