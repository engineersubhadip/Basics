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

function f(ele){
      if (ele.category == "Electronics"){
            return true;
      }else{
            return false;
      }
}


const output = products.filter(f).reduce(function (acc,curr){
      acc = acc + curr.price;
      return acc;
},0)

console.log(output);