let arr = [12,13,14,15];

// let squareArr = arr.map(function(ele){
//     return ele*ele;
// });

// console.log(squareArr);

Array.prototype.customMap = function(callback){
    // customMap will iterate through each and every element of the array and invoke the callback and store the result in the new array.
    let result = [];
    for (let i=0; i<this.length; i++){
        let currResult = callback(this[i]);
        result.push(currResult);
    }
    return result;
};

let squareArr = arr.customMap(function(ele){
    return ele*23;
});

console.log(squareArr);