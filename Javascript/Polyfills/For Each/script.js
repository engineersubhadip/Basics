const number = [10,20,30,40,50];

// number.forEach(function(ele){
//     console.log(ele+2);
// })

Array.prototype.customForEach = function(callback){
    // Callback will be invoked for each and every element of the array.
    for (let i=0; i<this.length; i++){
        callback(this[i]);
    }
}

number.customForEach(function(ele){
    console.log(ele+2);
});