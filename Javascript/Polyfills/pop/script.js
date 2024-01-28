const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// console.log(plants);

Array.prototype.customPop = function(){
    if (this.length == 0){
        return undefined;
    }
    let newLength = this.length-1;
    let lastElement = this[this.length-1];
    this.length = newLength;
    return lastElement;
}

console.log(plants.customPop());
console.log(plants);