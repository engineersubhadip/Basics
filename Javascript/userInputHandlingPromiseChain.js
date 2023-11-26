// Create a scenario where user input triggers a series of asynchronous operations. 
// For example, simulate a search functionality where the user enters a query (getUserQuery()), 
// fetches search results (fetchSearchResults()), and then displays them.


function getUserQuery(userSearchQuery){
      return new Promise(function exec1(resolve,reject){
            console.log("Processing the user request...");
            setTimeout(function one(){
                  console.log("We are done processing the user's request.");
                  const vegetables = ["potatoes","carrots","bell-peppers"];
                  resolve(vegetables);
            },5000)
      })
}

getUserQuery("vegetables")
.then(function userSearchHandler(searchValue){
      console.log("Here is the result",searchValue);
})