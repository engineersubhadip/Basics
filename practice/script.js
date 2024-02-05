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

// let array = [20,23,27,88,121];

// // let result = array.filter(function(ele){
// //     if (ele % 2 == 0){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // });

// // console.log(result);

// Array.prototype.customFilter = function(callback){
//     let result = [];
//     for (let i=0; i<this.length; i++){
//         let currResult = callback(this[i]);
//         if (currResult){
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// let output = array.customFilter(function(ele){
//     if (ele % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(output);

// * Polyfill of Reduce:-

// let array = [120,22,92,87,89,33,32,24];

// // let answer = array.reduce(function(acc,curr){
// //     if (curr % 2 == 0){
// //         acc.push(curr);
// //     }
// //     return acc;
// // },[]);

// // console.log(answer);

// Array.prototype.customReduce = function(callback,initialValue){
//     let result = initialValue;
//     for (let i=0; i<this.length; i++){
//         result = callback(result,this[i]);
//     }
//     return result;
// };

// let answer = array.customReduce(function(acc,curr){
//     if (curr % 3 == 0){
//         acc.push(curr);
//     }
//     return acc;
// },[]);

// console.log(answer);

// * Array.findIndex Polyfill:-

let array = [12,13,14,88,21];

// let result = array.findIndex(function(ele){
//     if (ele > 15){
//         return true;
//     }
// });

// console.log(result);

Array.prototype.customFindIndex = function(callback){
    for (let i=0; i<this.length; i++){
        let currVal = callback(this[i]);
        if (currVal){
            return i;
        }
    }
    return -1;
}

let result = array.customFindIndex(function (ele){
    return ele > 80;
});

console.log(result);