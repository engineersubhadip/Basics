let numbers = [9,12,13,14,145,26];

// console.log(numbers.indexOf(12,2));

Array.prototype.customIndexOf = function(target,startIndex){
    if (startIndex == undefined){
        startIndex = 0;
    }

    if (startIndex >= this.length){
        return false;
    }

    for (let i=startIndex; i<this.length; i++){
        if (this[i] == target){
            return true;
        }
    }
    return false;
}

console.log(numbers.customIndexOf(12));