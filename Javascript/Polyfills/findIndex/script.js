// findIndex will iterate through each and every element of the arr and apply the callback, whichever is the first element that satisfies the callback we will return the index of the element. If none of the callback satisfies the callback we will return -1.

const array1 = [5, 12, 8, 130, 44];

// console.log(array1.findIndex(function(ele){
//     return ele > 11;
// }));

Array.prototype.customFindIndex = function(callback){
    for (let i=0; i<this.length; i++){
        let currResult = callback(this[i]);
        if (currResult == true){
            return i;
            break;
        }
    }
    return -1;
};

console.log(array1.customFindIndex(function(ele){
    return ele>99;
}))