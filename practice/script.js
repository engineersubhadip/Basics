// * PolyFill of ForEach

let array = [12,13,14,15]

// array.forEach(function(ele){
//     console.log(ele*ele);
// });

Array.prototype.customForEach = function(callback){
    for (let i=0; i<this.length; i++){
        callback(this[i]);
    }
};

array.customForEach(function(ele){
    console.log(ele**3);
})