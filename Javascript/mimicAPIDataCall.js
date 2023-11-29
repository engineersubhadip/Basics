const list = [
      {
            id:1,
            title:"Product 1",
            decription:"Vegetables"
      },
      {
            id:2,
            title:"Product 2",
            decription:"Milk"
      },
      {
            id:3,
            title:"Product 3",
            decription:"Eggs"
      },
      {
            id:4,
            title:"Product 4",
            decription:"Bread"
      }
]

function apiMimic(delay){
      return new Promise(function executor(resolve,reject){
            setTimeout(function one(){
                  const list = [
                        {
                              id:1,
                              title:"Product 1",
                              decription:"Vegetables"
                        },
                        {
                              id:2,
                              title:"Product 2",
                              decription:"Milk"
                        },
                        {
                              id:3,
                              title:"Product 3",
                              decription:"Eggs"
                        },
                        {
                              id:4,
                              title:"Product 4",
                              decription:"Bread"
                        }
                  ]
                  resolve(list);
            },delay)
      })
}


apiMimic(4000)
.then(function cb(value){
      console.log("The data returned is",value);
})

console.log("We are waiting for the data to be returned...");