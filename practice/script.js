// * For Each PolyFill:-

let array = [12,13,14,91,22];

// let res = array.map(function(ele){
//     return ele*ele;
// });

// console.log(res);
// console.log(array);

Array.prototype.customMap = function(callback){
    let res = [];
    for (let i=0; i<this.length; i++){
        let currRes = callback(this[i]);
        res.push(currRes);
    }
    return res;
}

let output = array.map(function(ele){
    return ele**3;
});

console.log(output);