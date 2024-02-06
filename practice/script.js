// * Filter PolyFill:-

let array = [12,13,14,91,22];

// let result = array.filter(function(ele){
//     if (ele > 15){
//         return true;
//     }
// });

// console.log(result);

Array.prototype.customFilter = function(callback){
    let result = [];

    for (let i=0; i<this.length; i++){
        let currRes = callback(this[i]);
        if (currRes){
            result.push(this[i]);
        }
    }
    return result;
};

let output = array.customFilter(function(ele){
    if (ele > 22){
        return true;
    }
});

console.log(output);