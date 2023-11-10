const products = [
      { name: "Product 1", price: 20, category: "Electronics" },
      { name: "Product 2", price: 30, category: "Clothes" },
      { name: "Product 3", price: 40, category: "Electronics" },
      { name: "Product 4", price: 50, category: "Clothes" },
      { name: "Product 5", price: 60, category: "Clothes" },
      { name: "Product 6", price: 70, category: "Electronics" },
      { name: "Product 7", price: 80, category: "Clothes" },
      { name: "Product 8", price: 90, category: "Electronics" },
    ];


// ! Department Wise Price.

// * Target One:- {"cat1" : [1,2,3,4], "cat2" : [12,13,14,15]}

const tarOne = products.reduce(function(acc,curr){
      let currentCategory = curr.category;
      if (!acc[currentCategory]){
            acc[currentCategory] = [curr.price];
      }else{
            acc[currentCategory].push(curr.price);
      }
      return acc;
},{})

// * Target Two:- {"cat1" : 100; "cat2" : 200...}
const tarTwo = Object.keys(tarOne).reduce(function (acc,curr){
      let sumVal = tarOne[curr].reduce(function (sum,price){
            sum = sum+price;
            return sum;
      },0)
      acc[curr] = sumVal;
      return acc;
},{})


console.log(tarTwo);
// const output = products.reduce(function (acc,curr){
//       if (curr.category == 'Electronics'){
//             acc.push(curr.name);
//       }
// },[])

// function f(ele){
//       if (ele.category == "Electronics"){
//             return true
//       }else{
//             return false;
//       }
// }

// function f1(ele){
//       return ele.name;
// }

// const output = products.filter(f).map(f1);

// console.log(output);


// const output = products.reduce(function (acc,curr){
//       if (curr.category=="Electronics"){
//             acc.push(curr.name);
//       }
//       return acc;
// },[])

// console.log(output);

