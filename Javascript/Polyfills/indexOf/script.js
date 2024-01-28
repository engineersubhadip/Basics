const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'duck'];

console.log(beasts.indexOf('bison'));

Array.prototype.customIndexOf = function(targetElement){
    let resultIndex = -1;
    for (let i=0; i<this.length; i++){
        if (this[i] == targetElement){
            resultIndex = i;
            break;
        }
    }
    return resultIndex;
};

console.log(beasts.customIndexOf("duck"));