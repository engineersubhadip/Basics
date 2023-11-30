function customIterator(array){
      let index = 0;

      function next(){
            if (index >= array.length){
                  return undefined;
            }
            let returnValue = array[index];
            index+=1;
            return `The value is ${returnValue}`;
      }

      return next;
}

let value = customIterator([12,13,14,14,142,99]);

console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());