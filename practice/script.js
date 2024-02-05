// * PolyFill of ForEach

// let array = [12,13,14,15]

// // array.forEach(function(ele){
// //     console.log(ele*ele);
// // });

// Array.prototype.customForEach = function(callback){
//     for (let i=0; i<this.length; i++){
//         callback(this[i]);
//     }
// };

// array.customForEach(function(ele){
//     console.log(ele**3);
// })

// * Polyfill of Map:-

// let array = [12,13,14,15,188];

// // let result = array.map(function(ele){
// //     return ele*ele;
// // })

// // console.log(result);

// Array.prototype.customMap = function(callback){
//     let result = [];
//     for (let i=0; i<this.length; i++){
//         let currVal = callback(this[i]);
//         result.push(currVal);
//     }
//     return result;
// }

// let finalOutput = array.customMap(function(ele){
//     return ele*ele*ele;
// });

// console.log(finalOutput);

// * PolyFill of Filter:-

let array = [20,23,27,88,121];

// let result = array.filter(function(ele){
//     if (ele % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(result);

Array.prototype.customFilter = function(callback){
    let result = [];
    for (let i=0; i<this.length; i++){
        let currResult = callback(this[i]);
        if (currResult){
            result.push(this[i]);
        }
    }
    return result;
};

let output = array.customFilter(function(ele){
    if (ele % 2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(output);