// https://www.w3schools.com/jsref/jsref_some.asp

const ages = [3, 10, 18, 23];

// function checkAdult(age) {
//     return age > 18;
// }
// console.log(ages.some(checkAdult));

// console.log("Linked");

Array.prototype.customSome = function(callback){
    if (this.length == 0){
        return false;
    }
    for (let i=0; i<this.length; i++){
        let currValue = callback(this[i]);
        if (currValue == true){
            return true;
            break;
        }
    }
    return false;
};

console.log(ages.customSome(function(ele){
    return ele > 20;
}))