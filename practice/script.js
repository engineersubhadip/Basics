let arr1 = [12,13,14,14]

// let result = arr1.map(function(ele){
//     return ele*ele;
// });
// console.log(result);

Array.prototype.customMap = function(callback){
    let result = [];
    for (let i=0; i<this.length; i++){
        let currRes = callback(this[i]);
        result.push(currRes);
    }
    return result;
}

let val1 = arr1.customMap(function(ele){
    return ele*ele;
});

console.log(val1);