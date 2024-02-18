// let x = fetch("www.google.com");

// console.log(x);

// Build a custom Promise similar to fetch that will return the data after 10s.

let data = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ],
};


let customFetch  = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(data);
        },10000);
    })
}

customFetch().then(function(data){
    console.log(data.images);
}).catch(function(error){
    console.log(error);
})

