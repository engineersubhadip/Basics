// Imagine you're developing a real-time dashboard for monitoring stocks. You need to fetch the latest price data for multiple stocks from different sources and display them on the dashboard. How would you use promises to ensure that all price data is fetched efficiently and handle any errors that might occur during the process?

let stockNames = ["A K Spintex","Aakar Engg & Mf","Aarnav Fashions","Aasheesh Sec"];

// * I want to see both the data as well as the errors


function fetchData(stockName,delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let data = stockName.length;
            if (data > 11){
                resolve(stockName);
            }else{
                reject(`We cannot fetch the data for :- ${stockName}`);
            }
        },delay);
    });
};

Promise.allSettled(stockNames.map(function(name,index){
    return fetchData(name,(index+1)*1000);
}))
.then(function(data){
    // console.log("The returned list of data is :-",data);
    let result = data.reduce(function(acc,curr){
        let currStatus = curr.status;
        let currData = (curr.reason || curr.value);

        if(acc[currStatus] == undefined){
            acc[currStatus] = [currData];
        }else{
            acc[currStatus].push(currData);
        }
        return acc;
    },{});

    console.log(result);
});