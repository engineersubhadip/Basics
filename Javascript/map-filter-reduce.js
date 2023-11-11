// !return an array of objects containing only the categories that have an average price above 50.

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

// * Target 1: {'Electronics':[10,20,30], 'Clothes':[30,40,15]}

const tarOne = products.reduce(function(acc,curr){
      let currentCategory = curr.category;
      let currPrice = curr.price;

      if (!acc[currentCategory]){
            acc[currentCategory] = [currPrice];
      }else{
            acc[currentCategory].push(currPrice);
      }

      return acc;
},{})

// * Target Two:- {'Electronics':52, 'Clothes':55}

const tarTwo = Object.keys(tarOne).reduce(function(acc,curr){
      let currentCategory = curr;
      let currentPrice = tarOne[curr].reduce(function(sum,price){
            sum = sum + price;
            return sum;
      },0)

      acc[currentCategory] = currentPrice/tarOne[curr].length;
      return acc;
},{})

// * Target Three:- The Final Touch

const tarThree = Object.keys(tarTwo).reduce(function(acc,curr){
      let currentCategory = curr;
      let currentAverage = tarTwo[currentCategory];

      if (currentAverage > 50){
            acc.push({'category':currentCategory,'average':currentAverage});
      }
      return acc;
},[])

console.log(tarThree);
