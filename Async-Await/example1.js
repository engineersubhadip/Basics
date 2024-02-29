// Imagine you're developing a real-time dashboard for monitoring stocks. You need to fetch the latest price data for multiple stocks from different sources and display them on the dashboard. How would you use promises to ensure that all price data is fetched efficiently and handle any errors that might occur during the process?

let stockNames = ["A K Spintex","Aakar Engg & Mf","Aarnav Fashions","Aasheesh Sec"];

function fetchStockPrice(location,delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let data = location.length;
            if(data > 11){
                resolve(data);
            }else{
                reject(`We are currently unable to fetch stock data from ${location}`);
            }
        },delay);
    });
};

Promise.all(stockNames.map(function(location,index){
    return fetchStockPrice(location,(index+1)*1000);
}))
.then(function(data){
    console.log("The list of data is as follows :-",data);
})
.catch(function(error){
    console.log("The error is :-",error);
})