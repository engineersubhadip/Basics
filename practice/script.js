let array = [12,13,14,15,15,16];

// let result = array.filter(function(ele){
//     if (ele % 2 == 0){
//         return true
//     }
// })

// console.log(result);

Array.prototype.customFilter = function(callback){
    let result = [];
    for (let i=0; i<this.length; i++){
        let currVal = callback(this[i]);
        if (currVal){
            result.push(this[i]);
        }
    }
    return result;
}

let val = array.customFilter(function(ele){
    if (ele % 2 == 0){
        return true
    }
});

console.log(val);