// * For Each PolyFill:-

let array = [12,13,14,91,22];

// array.forEach(function(e){
//     console.log(e+2);
// });

Array.prototype.customForEach = function(callback){
    for (let i=0; i<this.length; i++){
        callback(this[i]);
    }
};

array.customForEach(function(ele){
    console.log(ele+44);
});

