// * Reduce PolyFill:-

let array = [12,13,14,91,22,12,13,13];

// let result = array.reduce(function(acc,curr){
//     if (acc[curr] == undefined){
//         acc[curr]=1;
//     }else{
//         acc[curr]+=1;
//     }
//     return acc;
// },{});

// console.log(result);

Array.prototype.customReduce = function(callback,initialVal){
    let result = initialVal;

    for (let i=0; i<this.length; i++){
        result = callback(result,this[i]);
    }
    return result;
}

let output = array.customReduce(function(acc,curr){
    if (acc[curr] == undefined){
        acc[curr]=1;
    }else{
        acc[curr]+=1;
    }
    return acc;
},{});

console.log(output);