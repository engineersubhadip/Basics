let arr = [12,13,14,15];

let result1 = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

Array.prototype.customReduce = function(callback,accValue){
    // customReduce will iterate through each and every element of the array and invoke the callback and store the result inside accumulator

    let result = undefined;
    let startIndex = undefined;

    if (accValue == undefined){
        result = this[0];
        startIndex = 1;
    }else{
        result = accValue;
        startIndex = 0;
    }
    for (let i=startIndex; i<this.length; i++){
        result = callback(result,this[i]);
    }
    return result;
};

let result2 = arr.customReduce(function(acc,curr){
    if (acc[curr] == undefined){
        acc[curr] = 1;
    }else{
        acc[curr]+=1;
    }
    return acc;
},{});

console.log(result2);