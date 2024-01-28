let arr = [10,12,14,15,13,17];

let result = arr.filter(function(ele){
    if (ele%2 == 0){
        return true;
    }else{
        return false;
    }
});

Array.prototype.customFilter = function(callback){
    // customFilter will iterate through each and every element of the array and invoke the callback and store the result in a seperate array.
    let result = [];
    for (let i=0; i<this.length; i++){
        let currResult = callback(this[i]);
        if (currResult){
            result.push(this[i]);
        }
    }
    return result;
};

let result2 = arr.customFilter(function(ele){
    if (ele%2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(result2);